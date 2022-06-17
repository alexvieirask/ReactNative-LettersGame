import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import Colors from "../../config/General/Colors";
import Fonts from "../../config/General/Fonts";
const LetterInput = ({ label, letter, setletter }) => {
  const letterSelected = () => {
    letter == label ? setletter(label + " ") : setletter(label);
  };
  const styles = StyleSheet.create({
    container: {
      height: 55,
      width: 35,
      borderRadius: 3,
      backgroundColor: Colors.SQUARE_KEYBOARD_BACKGROUND,
      alignItems: "center",
      justifyContent: "center",
    },
    label: {
      color: Colors.SQUARE_KEYBOARD,
      fontWeight: "bold",
      fontSize: Fonts.LABEL_SQUARE_KEYBOARD,
    },
  });
  return (
    <TouchableHighlight
      onPress={() => {
        letterSelected();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableHighlight>
  );
};
export default LetterInput;
