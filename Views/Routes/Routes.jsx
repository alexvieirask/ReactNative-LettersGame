import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Profile from "../Pages/Profile";
import Home from "../Pages/Home";
import CasualGame from "../Pages/CasualGame";
import HowToplay from "../Pages/HowToPlay";
const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTintColor: "#FFF",
          headerTransparent: true,
          headerStyle:{
            height:65
          },
          title: null,
        }}
      />
      <Stack.Screen
        name="CasualGame"
        component={CasualGame}
        options={{
          headerShown: false,
        }}
      />

    <Stack.Screen
        name="HowToPlay"
        component={HowToplay}
       options={{
          headerTintColor: "#FFF",
          headerTransparent: true,
          headerStyle:{
            height:65
          },
          title: null,
        }}
      />
    </Stack.Navigator>
  );
}