import React from "react";
import { View } from "react-native";
import { styles } from "../../assets/styles/Keyboard";
import LetterInput from "./letter";
import SpecialButton from "./specialButton";
const Keyboard = ({ letter, setLetter }) => {
  return (
    <View style={{width:'100%'}}>
      <View style={styles.keyboardFirstRow}>
        <LetterInput label="Q" letter={letter} setletter={setLetter} />
        <LetterInput label="W" letter={letter} setletter={setLetter} />
        <LetterInput label="E" letter={letter} setletter={setLetter} />
        <LetterInput label="R" letter={letter} setletter={setLetter} />
        <LetterInput label="T" letter={letter} setletter={setLetter} />
        <LetterInput label="Y" letter={letter} setletter={setLetter} />
        <LetterInput label="U" letter={letter} setletter={setLetter} />
        <LetterInput label="I" letter={letter} setletter={setLetter} />
        <LetterInput label="O" letter={letter} setletter={setLetter} />
        <LetterInput label="P" letter={letter} setletter={setLetter} />
      </View>
      <View style={styles.keyboardSecondRow}>
        <LetterInput label="A" letter={letter} setletter={setLetter} />
        <LetterInput label="S" letter={letter} setletter={setLetter} />
        <LetterInput label="D" letter={letter} setletter={setLetter} />
        <LetterInput label="F" letter={letter} setletter={setLetter} />
        <LetterInput label="G" letter={letter} setletter={setLetter} />
        <LetterInput label="H" letter={letter} setletter={setLetter} />
        <LetterInput label="J" letter={letter} setletter={setLetter} />
        <LetterInput label="K" letter={letter} setletter={setLetter} />
        <LetterInput label="L" letter={letter} setletter={setLetter} />
      </View>
      <View style={styles.keyboardThreeRow}>
        <SpecialButton letter={letter} label="Delete" setletter={setLetter} />
        <LetterInput label="Z" letter={letter} setletter={setLetter} />
        <LetterInput label="X" letter={letter} setletter={setLetter} />
        <LetterInput label="C" letter={letter} setletter={setLetter} />
        <LetterInput label="V" letter={letter} setletter={setLetter} />
        <LetterInput label="B" letter={letter} setletter={setLetter} />
        <LetterInput label="N" letter={letter} setletter={setLetter} />
        <LetterInput label="M" letter={letter} setletter={setLetter} />
        <SpecialButton label="Enter" letter={letter} setletter={setLetter} />
      </View>
    </View>
  );
};
export default Keyboard;