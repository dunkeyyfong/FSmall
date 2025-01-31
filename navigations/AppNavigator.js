import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import BrowserScreen from "../screens/BrowserScreen";

const Stack = createStackNavigator();

const AppNavigator = ({ isFirstLaunch }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isFirstLaunch ? "Welcome" : "Browser"}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Browser"
          component={BrowserScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
