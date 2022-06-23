import React from "react";
import { View, StyleSheet,Text } from "react-native";
const SeparatorLine = ({ height, color }) => {
  const styles = StyleSheet.create({
    container: {
      height: height,
      backgroundColor: color,
      marginVertical:'2%',
      marginHorizontal:'5%',
 
    },
  });
  return<View style={styles.container} />;
};
export default SeparatorLine;