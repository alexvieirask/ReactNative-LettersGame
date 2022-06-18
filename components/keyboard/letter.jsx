import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { styles } from "../../assets/styles/Keyboard";
const LetterInput = ({ label, letter, setletter }) => {
  const lettersRepeatPossible = () => {
    if( letter == label){
      setletter(label + " ")
    }else{
      setletter(label)
    }
  };
  return (
    <TouchableHighlight onPress={() => lettersRepeatPossible()}>
      <View style={styles.keyboardLetterContainer}>
        <Text style={styles.keyboardLetterLabel}>{label}</Text>
      </View>
    </TouchableHighlight>
  );
};
export default LetterInput;
