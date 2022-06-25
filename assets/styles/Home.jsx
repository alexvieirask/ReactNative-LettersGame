import { StyleSheet } from "react-native";
import Colors from "../../config/General/Colors";

const styles = StyleSheet.create({
  page: {
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: Colors.GAME_BACKGROUND,
    paddingHorizontal: "5%",
  },
  body: {
    paddingTop: "10%",
    flex: 1,
  },
  icon: {
    alignItems: "flex-end",
    marginBottom:'25%'
  },
  tittle: {
    fontSize: 42,
    fontWeight: "400",
    color: "#fff",
  },
  subtittle: {
    fontSize: 20,
    fontWeight: "400",
    color: "#fff",
  },
  howPlay: {
    color: "#fff",
    fontSize: 14,
  },
  subtittle2: {
    color: "#fff",
    fontSize: 12,
  },
  buttons: {
    justifyContent: "center",
    bottom:'10%',
    width: "80%",
    height: "72%",
  },
});

export { styles };
