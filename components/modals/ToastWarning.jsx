import { Text, Animated, View } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "react-native-vector-icons";
import Colors from "../../config/general/Colors";
import Fonts from "../../config/general/Fonts";
export default function ToastWarning({ Toast, set_Toast }) {
  const [right, setRight] = useState(new Animated.Value(-300));
  useEffect(() => {
    Toast && animationToast();
  }, [Toast]);
  const animationToast = () => {
    Animated.sequence([
      Animated.timing(right, {
        toValue: -10,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.delay(5000),
      Animated.timing(right, {
        toValue: -300,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
    setTimeout(() => {
      set_Toast(false);
    }, 5000);
  };
  const toastStructure = () => {
    var structure = [Colors.ERROR, "md-warning-outline"];
    return structure;
  };
  return (
    <Animated.View
      style={{
        height: 50,
        backgroundColor: toastStructure()[0],
        alignItems: "center",
        position: "absolute",
        right: right,
        bottom: "50%",
        borderTopLeftRadius: 25,
        padding: "2%",
      }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row-reverse",
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: Fonts.SEMIBOLD,
            color: Colors.TOAST_LABEL,
            paddingLeft: "5%",
          }}>
          Palavra não encontrada
        </Text>
        <Ionicons name={toastStructure()[1]} size={20} color={Colors.TOAST_LABEL} />
      </View>
    </Animated.View>
  );
}