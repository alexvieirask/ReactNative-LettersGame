import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Profile from "../Pages/Profile";
import Home from "../Pages/Home";
import CasualGame from "../Pages/CasualGame";
import HowToplay from "../Pages/HowToPlay";
const Stack = createStackNavigator();
const default_options = {
  headerTintColor: "#FFF",
  headerTransparent: true,
  headerStyle:{
    height:65
  },
  title: null,
}
const hideHeader = {
  headerShown: false
}

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={hideHeader}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={default_options}
      />
      <Stack.Screen
        name="CasualGame"
        component={CasualGame}
        options={hideHeader}
      />

    <Stack.Screen
        name="HowToPlay"
        component={HowToplay}
       options={default_options}
      />
    </Stack.Navigator>
  );
}