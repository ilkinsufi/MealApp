import React from "react";
import { Platform, StatusBar, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <>
      <SafeAreaView>
        <NavigationContainer>
          <StatusBar
            barStyle={Platform.OS === "ios" ? "light-content" : "light-content"}
          />

          <CategoriesScreen />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}
