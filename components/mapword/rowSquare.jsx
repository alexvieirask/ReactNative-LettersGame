import React from "react";
import { View, StyleSheet } from "react-native";
import SquareLetter from "./squareLetter";

const RowSquare = ({letters,status,wordcomplete}) => {
  return (
    <View style={styles.firtsRow}>
      <SquareLetter
        wordcomplete={wordcomplete}
        status={status[0]}
        letter={letters[0]}
      />
      <SquareLetter
        wordcomplete={wordcomplete}
        status={status[1]}
        letter={letters[1]}
      />
      <SquareLetter
        wordcomplete={wordcomplete}
        status={status[2]}
        letter={letters[2]}
      />
      <SquareLetter
        wordcomplete={wordcomplete}
        status={status[3]}
        letter={letters[3]}
      />
      <SquareLetter
        wordcomplete={wordcomplete}
        status={status[4]}
        letter={letters[4]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  firtsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "1%",
    paddingHorizontal: "2%",
  },
});
export default RowSquare;