// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   Button,
//   useColorScheme,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import * as Contacts from "expo-contacts";
// import { useNavigation } from "@react-navigation/native";

// const Page = () => {
//   const [error, setError] = useState("");
//   const [contacts, setContacts] = useState([]);
//   const colorScheme = useColorScheme();
//   const navigation = useNavigation();

//   const requestContactsPermission = async () => {
//     try {
//       const { status } = await Contacts.requestPermissionsAsync();
//       if (status === "granted") {
//         const { data } = await Contacts.getContactsAsync({
//           fields: [
//             Contacts.Fields.Birthday,
//             Contacts.Fields.Emails,
//             Contacts.Fields.FirstName,
//             Contacts.Fields.LastName,
//             Contacts.Fields.PhoneNumbers,
//           ],
//         });
//         if (data.length > 0) {
//           setContacts(data);
//         } else {
//           setError("No contacts found");
//         }
//       } else {
//         setError("Permission to access contacts denied.");
//       }
//     } catch (error) {
//       setError("Error fetching contacts: " + error.message);
//     }
//   };

//   useEffect(() => {
//     requestContactsPermission();
//   }, []);

//   return (
//     <ScrollView>
//       <View>
//         {error ? (
//           <View>
//             <Text>{error}</Text>
//             <Button
//               title="Request Permissions"
//               onPress={requestContactsPermission}
//             />
//           </View>
//         ) : (
//           <View>
//             {contacts.map((contact) => (
//               <TouchableOpacity
//                 key={contact.id}
//                 style={[
//                   styles.container,
//                   {
//                     backgroundColor: colorScheme === "dark" ? "#333" : "#fff",
//                   },
//                 ]}
//                 onPress={() =>
//                   navigation.navigate("call_ui", {
//                     contactId: contact?.id,
//                     firstName: contact?.firstName,
//                     phoneNumbers: contact?.phoneNumbers || [],
//                   })
//                 }
//               >
//                 <View>
//                   <Text
//                     style={[
//                       styles.text,
//                       {
//                         color: colorScheme === "dark" ? "#fff" : "#000",
//                       },
//                     ]}
//                   >
//                     {contact?.firstName} {contact?.lastName}
//                   </Text>
//                   {contact?.phoneNumbers && (
//                     <View>
//                       <Text>Phone Numbers:</Text>
//                       <Text>{contact.phoneNumbers[0]?.number}</Text>
//                     </View>
//                   )}
//                 </View>
//               </TouchableOpacity>
//             ))}
//           </View>
//         )}
//       </View>
//     </ScrollView>
//   );
// };

// export default Page;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     alignItems: "center",
//     height: 70,
//     marginTop: 20,
//     paddingHorizontal: 20,
//   },
//   text: {
//     fontSize: 18,
//     color: "#fff",
//   },
// });

import React from "react";
import { View, Button } from "react-native";
import call from "react-native-phone-call";

const App = () => {
  const handleCall = () => {
    const phoneNumber = "01647595828"; // Replace with the desired phone number
    call({ number: phoneNumber, prompt: true });
  };

  return (
    <View>
      <Button title="Call" onPress={handleCall} />
    </View>
  );
};

export default App;
