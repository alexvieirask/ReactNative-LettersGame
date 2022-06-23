import { StyleSheet } from "react-native";
import Colors from "../../config/General/Colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GAME_BACKGROUND,
  },
  body: {
    marginTop: "15%",
    flex: 1,
    backgroundColor: "#4a4a4a",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  tittle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFF",
    marginTop: "10%",
    marginLeft: "6%",
  },
  subtittle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFF",
  },
  graphicContainer: {
    padding: "5%",
    backgroundColor: "#ededed",
    width: "90%",
    alignItems: "center",
    borderRadius: 15,
    marginTop: "2%",
  },
  allMatchesContainer: {
    alignItems: "center",
    marginTop: "2%",
  },
  informationLabelType1: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  informationLabelType2: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "600",
  },
  percentMatchesContainer:{
    flexDirection: "row",
    marginHorizontal: "6%",
    justifyContent: "space-between",
    marginVertical: "5%",
  }
});

export { styles };
