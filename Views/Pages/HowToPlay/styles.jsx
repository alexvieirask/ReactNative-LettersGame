import { StyleSheet } from "react-native";
import Colors from "../../../config/general/Colors";

const styles = StyleSheet.create({
  page: {
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: Colors.GAME_BACKGROUND,
  },
  body: {
    flex: 1,
    paddingTop: "10%",
    paddingHorizontal: "10%",
  },
  bodyContainer: {
    flex: 1,
    marginTop: "15%",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: "#e8e8e8",
  },
  tittle: {
    fontSize: 30,
    fontWeight: "500",
  },
  paragraph: {
    textAlign: "justify",
    fontSize: 15,
  },
  containerExampleRow: {
    marginTop: "2%",
    backgroundColor: "#FFF",
    padding: "4%",
    borderRadius: 20,
  },
});

export { styles };