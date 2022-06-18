import React from "react";
import { View } from "react-native";
import SquareLetter from "./squareLetter";
import { styles } from "../../assets/styles/RowSquare";
const RowSquare = ({letters,status,wordcomplete}) => {
  return (
    <View style={styles.row}>
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

export default RowSquare;