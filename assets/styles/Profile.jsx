import { StyleSheet } from "react-native";
import Colors from "../../config/General/Colors";
import Fonts from "../../config/General/Fonts";
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
    marginTop: "5%",
    marginLeft: "6%",
  },
  subtittle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFF",
  },
  graphicContainer: {
    marginTop: "2%",
    justifyContent: "center",
    backgroundColor: "#ededed",
    width: "90%",
    height: "65%",
    alignItems: "center",
    borderRadius: 15,
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
  informationLabelType3: {
    fontSize: 18,
    fontWeight: Fonts.HAIRLINE,
  },
  percentMatchesContainer: {
    flexDirection: "row",
    marginHorizontal: "6%",
    justifyContent: "space-between",
    marginVertical: "5%",
  },
});

export { styles };
