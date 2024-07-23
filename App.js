import React, { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppNavigator from "./navigations/AppNavigator";
import WelcomeScreen from "./screens/WelcomeScreen";

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    async function checkFirstLaunch() {
      try {
        const hasLaunched = await AsyncStorage.getItem("hasLaunched");
        if (hasLaunched === null) {
          await AsyncStorage.setItem("hasLaunched", "true");
          setIsFirstLaunch(true);
          console.log("Check First Launch");
        } else {
          setIsFirstLaunch(false);
        }
      } catch (error) {
        console.log(error);
      }
    }

    checkFirstLaunch();
  }, []);

  if (isFirstLaunch === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <AppNavigator isFirstLaunch={isFirstLaunch} />;
};

export default App;
