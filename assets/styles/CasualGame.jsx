import { StyleSheet } from "react-native";
import Colors from "../../config/General/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "5%",
    alignItems: "center",
    backgroundColor: Colors.GAME_BACKGROUND,
    paddingHorizontal: "3%",
    justifyContent: "space-between",
    paddingBottom: "5%",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    paddingTop: "5%",
    paddingHorizontal: "2%",
    paddingBottom: "5%",
  },
});
export { styles };
