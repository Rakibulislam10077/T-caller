import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import CallLog from "react-native-call-log";

const CallLogExample = () => {
  const [callLogs, setCallLogs] = useState([]);

  useEffect(() => {
    // Load call logs when the component mounts
    loadCallLogs();
  }, []);

  const loadCallLogs = () => {
    // Use the CallLog.load() method to get call logs
    CallLog.load(10) // Load the latest 10 call logs
      .then((callLogs) => {
        setCallLogs(callLogs);
      })
      .catch((error) => {
        console.error("Error loading call logs:", error);
      });
  };

  return (
    <View>
      <Text>Call Logs:</Text>
      <FlatList
        data={callLogs}
        keyExtractor={(item) => item.callDateTime}
        renderItem={({ item }) => (
          <View>
            <Text>Date: {item.callDateTime}</Text>
            <Text>Number: {item.phoneNumber}</Text>
            <Text>Type: {item.callType}</Text>
            <Text>Duration: {item.duration}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CallLogExample;
