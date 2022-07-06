import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
export default function ButtonSimple({ text, destiny }) {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(destiny)}
      style={styles.buttonContainer}
    >
      <Text style={styles.buttonLabel}>{text}</Text>
    </TouchableOpacity>
  );
}
