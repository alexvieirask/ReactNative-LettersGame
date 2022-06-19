import React from "react";
import { View, StyleSheet, Text } from "react-native";
import styleStructureSquare from "../../services/styleStructureSquare";
import { styles } from "../../assets/styles/SquareLetter";
const SquareLetter = ({ letter, status, wordcomplete }) => {
  const structure = styleStructureSquare;
  const styleSquare = () =>{
    var style = {
      background: null,
      border: null,
    };
  
    if (wordcomplete == false) {
      if (status == "ONFOCUS") {
        style = structure.ONFOCUS;
      } else {
        style = structure.DEFAULT;
      }
    }
   
    if (wordcomplete == true) {
      if (status == "GREEN") {
        style = structure.GREEN;
      }
  
      if (status == "YELLOW") {
        style = structure.YELLOW;
      }
  
      if (status == "RED") {
        style = structure.RED;
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