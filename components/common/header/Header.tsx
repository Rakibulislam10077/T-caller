import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../../constants/Colors";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    height: 70,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    borderBottomColor: Colors.light.borderColor,
    borderBottomWidth: 1,
  },
});
