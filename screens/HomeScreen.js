import React from "react";
import { SafeAreaView, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "./ProductScreen";
import ProductsScreen from "./ProductsScreen";

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator
      initialrouteName="Products"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
