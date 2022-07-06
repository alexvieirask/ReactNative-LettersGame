import React from "react";
import { View, StyleSheet } from "react-native";
const SeparatorLine = ({ height, color,mH }) => {
  const styles = StyleSheet.create({
    container: {
      height: height,
      backgroundColor: color,
      marginVertical:'2%',
      marginHorizontal:mH,
    },
  });
  return<View style={styles.container} />;
};
export default SeparatorLine;