import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../../config/General/Colors";
import Fonts from "../../config/General/Fonts";
const SquareLetter = ({ letter, status, wordcomplete }) => {
  const STRUCTURE = {
    ONFOCUS: {
      background: Colors.ONFOCUS_STATUS_BACKGROUND,
      border: Colors.ONFOCUS_STATUS_BORDER,
    },
    DEFAULT: {
      background: Colors.DEFAULT_STATUS_BACKGROUND,
      border: Colors.DEFAULT_STATUS_BORDER,
    },
    YELLOW: {
      background: Colors.YELLOW_STATUS_BACKGROUND,
      border: Colors.YELLOW_STATUS_BORDER,
    },
    GREEN: {
      background: Colors.GREEN_STATUS_BACKGROUND,
      border: Colors.GREEN_STATUS_BORDER,
    },
    RED: {
      background: Colors.RED_STATUS_BACKGROUND,
      border: Colors.RED_STATUS_BORDER,
    },
  };

  var background = null;
  var border = null;



  if (wordcomplete == false) {
    if (status == "ONFOCUS") {
      background = STRUCTURE.ONFOCUS.background;
      border = STRUCTURE.ONFOCUS.border;
    } else {
      background = STRUCTURE.DEFAULT.background;
      border = STRUCTURE.DEFAULT.border;
    }
  } else {
    if (status == "GREEN") {
      background = STRUCTURE.GREEN.background;
      border = STRUCTURE.GREEN.border;
    }

    if (status == "YELLOW") {
      background = STRUCTURE.YELLOW.background;
      border = STRUCTURE.YELLOW.background;
    }

    if (status == "RED") {
      background = STRUCTURE.RED.background;
      border = STRUCTURE.RED.background;
    }
  }

  const styles = StyleSheet.create({
    container: {
      height: 70,
      width: "19.5%",
      borderWidth: 1,
      borderColor: border,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: background,
    },
    label: {
      fontSize: 30,
      color: "#fff",
      fontWeight: Fonts.EXTRABOLD,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{letter}</Text>
    </View>
  );
};

export default SquareLetter;
