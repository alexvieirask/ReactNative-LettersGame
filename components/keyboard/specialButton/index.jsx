import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { FontAwesome } from "react-native-vector-icons";
import { styles } from "../styles";
const SpecialButton = ({label,setletter,letter}) => {
  const lettersRepeatPossible = () =>{
    if( letter == label){
      setletter(label + " ")
    }else{
      setletter(label)
    }
  }
  return label === "Enter" ? (
    <TouchableHighlight onPress={() => lettersRepeatPossible()}>
      <View style={styles.keyboardLetterSpecialContainer}>
        <Text style={styles.keyboardLetterSpecialLabel}>Enter</Text>
      </View>
    </TouchableHighlight>
  ) : (
  <TouchableHighlight onPress={() => lettersRepeatPossible()}>
      <View style={styles.keyboardLetterSpecialContainer}>
        <FontAwesome name="remove" size={20} color="#fff" />
      </View>
    </TouchableHighlight>
  );


};

export default SpecialButton;
