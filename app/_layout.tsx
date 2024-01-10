import React from "react";
import { Link, Stack } from "expo-router";
import { Image, Platform, Text, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import Colors from "../constants/Colors";
const Layout = () => {
  let colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "light" ? DefaultTheme : DarkTheme}>
      <Stack screenOptions={{ headerShadowVisible: false }}>
        <Stack.Screen
          name="(tabs)/index"
          options={{
            headerTitle: () => (
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  marginLeft: Platform.OS === "android" ? 20 : 0,
                  color:
                    colorScheme === "dark"
                      ? Colors.dark.text
                      : Colors.light.text,
                }}
              >
                Home
              </Text>
            ),
          }}
        />
        <Stack.Screen
          name="details"
          options={{ headerTitle: "Details", headerBackTitle: "Back" }}
        />
        <Stack.Screen
          name="call_list"
          options={{ headerTitle: "All call", headerBackTitle: "Back" }}
        />
        <Stack.Screen
          name="profile"
          options={{ headerTitle: "Profile", headerBackTitle: "Back" }}
        />
        <Stack.Screen
          name="call_ui"
          options={{ headerTitle: "", headerBackTitle: "Back" }}
        />
      </Stack>
    </ThemeProvider>
  );
};

export default Layout;
