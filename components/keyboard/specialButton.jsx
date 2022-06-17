import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { FontAwesome } from "react-native-vector-icons";
import Colors from "../../config/General/Colors";
import Fonts from "../../config/General/Fonts";
const SpecialButton = ({label,setletter,letter}) => {
  const styles = StyleSheet.create({
    container: {
      height: 55,
      width: 55,
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
  return label == "Enter" ? (
    <TouchableHighlight
      onPress={() => {
        letter == label ? setletter(label + " ") : setletter(label)
      }}
    >
      <View style={styles.container}>
        <Text style={styles.label}>Enter</Text>
      </View>
    </TouchableHighlight>
  ) : (
    <TouchableHighlight
      onPress={() => {
        letter == label ? setletter(label + " ") : setletter(label)
      }}
    >
      <View style={styles.container}>
        <FontAwesome name="remove" size={20} color="#fff" />
      </View>
    </TouchableHighlight>
  );


};

export default SpecialButton;
