import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";


import navigationTheme from "./app/navigation/navigationTheme";
import ScreenNavigator from "./app/navigation/ScreenNavigator";

export default function App() {

  return (
    <NavigationContainer theme={navigationTheme}>
      <ScreenNavigator />
    </NavigationContainer>
  );
}