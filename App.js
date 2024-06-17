import React from "react";
import { Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MetalDetailScreen from "./screens/MetalDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#3f2f25" },
          headerTintColor: "white",
          headerTitleAlign: "center",
          contentStyle: { backgroundColor: "#3f2f25" },
        }}
      >
        <Drawer.Screen name="Categories" component={CategoriesScreen} />
        <Drawer.Screen name="Favotites" component={FavoritesScreen} />
      </Drawer.Navigator>
    );
  }

  return (
    <>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "light-content" : "default"}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#3f2f25" },
            headerTintColor: "white",
            headerTitleAlign: "center",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MetalDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
