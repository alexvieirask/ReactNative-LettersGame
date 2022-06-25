import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { styles_square } from "../../services/structures";
import { styles } from "../../assets/styles/SquareLetter";
const SquareLetter = ({ letter, status, wordcomplete }) => {
  const structure = styles_square
  const styleSquare = () =>{
    var style = {
      background: null,
      border: null,
    };
  
    if (wordcomplete == false) {
      if (status == "focus") {
        style = structure.focus;
      } else {
        style = structure.default;
      }
    }
   
    if (wordcomplete == true) {
      if (status == "green") {
        style = structure.green;
      }
  
      if (status == "yellow") {
        style = structure.yellow;
      }
  
      if (status == "red") {
        style = structure.red;
      }
    }
    return style
  }
  const style = styleSquare()
  const stylesSquare = StyleSheet.create({
    container: {
      height: 70,
      width: "19.5%",
      borderWidth: 1,
      borderColor: style.border,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: style.background,
    },
  });
  return (
    <View style={stylesSquare.container}>
      <Text style={styles.squareLabel}>{letter}</Text>
    </View>
  );
};
export default SquareLetter;