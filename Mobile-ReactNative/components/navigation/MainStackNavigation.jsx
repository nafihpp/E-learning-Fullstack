import React, { useEffect, useLayoutEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TabNavigation from "./TabNavigation";
import NewUserStack from "./NewUserStack";
import AuthStack from "./AuthStack";

const Stack = createStackNavigator();

export default function MainStackNavigation() {
  const [firstTimeUser, setFirstTimeUser] = useState(true);
  const [authenticated, setAuthenticated] = useState(true);

  useLayoutEffect(() => {
    checkFirstTimeUser();
  }, []);

  async function checkFirstTimeUser() {
    try {
      const result = await AsyncStorage.getItem("firstTimeUser");
      if (result !== null) {
        setFirstTimeUser(false);
      } else {
        setFirstTimeUser(true);
        await AsyncStorage.setItem("firstTimeUser", JSON.stringify(false));
      }
      console.warn(result, "==result");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {firstTimeUser && (
          <Stack.Screen name="Newuser" component={NewUserStack} />
        )}
        {!authenticated && <Stack.Screen name="Auth" component={AuthStack} />}
        {authenticated && (
          <Stack.Screen
            name="Homescreen"
            component={TabNavigation}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
  r;
}
