import { StyleSheet } from "react-native";
import Colors from "../../config/General/Colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GAME_BACKGROUND,
    paddingHorizontal: "4%",
  },
  body: {
    paddingTop: "10%",
    flex: 1,
  },
  tittle: {
    fontSize: 30,
    fontWeight: "400",
    color: "#fff",
    marginTop: "5%",
    textAlign: "center",
    marginBottom: "2%",
  },
  statisticsInfo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "400",
  },
  subtittle: {
    color: "#fff",
    fontSize: 20,
    marginTop: "2%",
    textAlign: "center",
    fontWeight: "200",
  },
  numberSubtittle: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "200",
  },
});
export { styles };
