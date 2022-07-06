import { StyleSheet } from "react-native";
import Colors from "../../config/general/Colors";
import Fonts from "../../config/general/Fonts";

const styles = StyleSheet.create({
  keyboardFirstRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  keyboardThreeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "1%",
  },
  keyboardSecondRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "1%",
    paddingHorizontal: "2%",
  },
  keyboardLetterContainer: {
    height: 55,
    width: 35,
    borderRadius: 3,
    backgroundColor: Colors.SQUARE_KEYBOARD_BACKGROUND,
    alignItems: "center",
    justifyContent: "center",
  },
  keyboardLetterLabel: {
    color: Colors.SQUARE_KEYBOARD,
    fontWeight: "bold",
    fontSize: Fonts.LABEL_SQUARE_KEYBOARD,
  },
  keyboardLetterSpecialContainer: {
    height: 55,
    width: 55,
    borderRadius: 3,
    backgroundColor: Colors.SQUARE_KEYBOARD_BACKGROUND,
    alignItems: "center",
    justifyContent: "center",
  },
  keyboardLetterSpecialLabel: {
    color: Colors.SQUARE_KEYBOARD,
    fontWeight: "bold",
    fontSize: Fonts.LABEL_SQUARE_KEYBOARD,
  },
});
export { styles };
