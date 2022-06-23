import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./Views/Routes/Routes";
import { StatusBar } from "react-native";
export default function App (){
  return (  
    <NavigationContainer>
      <StatusBar barStyle='default'/>
      <Routes />
    </NavigationContainer>
  );
}