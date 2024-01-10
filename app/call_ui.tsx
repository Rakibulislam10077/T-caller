import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const call_ui = () => {
  const params = useLocalSearchParams();
  const { contactId, firstName, phoneNumbers } = params;
  console.log(contactId);
  console.log(firstName);
  console.log(phoneNumbers[0].number);
  //   console.log(phoneNumber);

  return (
    <View>
      {contactId ? (
        <View>
          <Text>call_ui</Text>
          {/* Render details from item as needed */}
          <Text>{firstName}</Text>
          <Text>{phoneNumbers[0].number}</Text>
        </View>
      ) : (
        <Text>No data received</Text>
      )}
    </View>
  );
};

export default call_ui;
