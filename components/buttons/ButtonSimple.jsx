import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function ButtonSimple({ text, destiny }) {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: "#FFF",
      paddingHorizontal: "5%",
      height: 60,
      width: "100%",
      paddingVertical: "2%",
      borderRadius: 5,
      marginVertical: "2%",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonLabel: {
      fontSize: 24,
      fontWeight: "300",
    },
  });
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(destiny)}
      style={styles.buttonContainer}
    >
      <Text style={styles.buttonLabel}>{text}</Text>
    </TouchableOpacity>
  );
}
