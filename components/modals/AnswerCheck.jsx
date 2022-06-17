import { Modal, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import SeparatorLine from "../SeparatorLine";
import { useEffect, useState } from "react";
import Colors from "../../config/General/Colors";
import { useNavigation } from "@react-navigation/native";
export default function AnswerCheck({
  showAlert,
  setShowAlert,
  wordstatus,
  word,
  ActionPress,
}) {
  const navigation = useNavigation();
  const [data, setData] = useState({
    tittle: null,
    content: null,
    word: word,
  });
  const colorStatus = wordstatus == "Winner" ? Colors.SUCCESS : Colors.ERROR;
  const onClose = () => {
    setShowAlert(false), ActionPress();
  };

  const OnMenu = () => {
    setShowAlert(false),
      setTimeout(() => {
        navigation.navigate("Home");
      }, 1000);
  };

  const styles = StyleSheet.create({
    outerview: {
      flex: 1,
      justifyContent: "center",
    },
    modalBox: {
      borderRadius: 15,
      backgroundColor: "#fff",
      marginHorizontal: 50,
    },
    header: {
      alignItems: "center",
      marginLeft: "5%",
      justifyContent: "center",
      padding: 15,
    },

    tittleHeader: {
      fontWeight: "700",
      fontSize: 24,
      color: colorStatus,
    },
    messageBox: {
      marginVertical: "5%",
      padding: 15,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonContainer: {
      alignItems: "flex-end",
      paddingVertical: "8%",
      paddingHorizontal: "10%",
      flexDirection: "row",
    },
    button: {
      marginRight: "2%",
      backgroundColor: colorStatus,
      paddingVertical: 8,
      paddingHorizontal: 10,
      borderRadius: 5,
      alignItems: "center",
      width: 80,
    },

    buttonMenu: {
      marginRight: "2%",
      paddingVertical: 7,
      paddingHorizontal: 10,
      borderRadius: 5,
      alignItems: "center",
      width: 100,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: colorStatus,
    },

    wordTittle: {
      textAlign: "center",
      borderColor: colorStatus,
      borderWidth: 1,
      fontSize: 30,
      fontWeight: "800",
      color: "#FFF",
      backgroundColor: colorStatus,
      borderBottomRightRadius: 15,
      borderTopLeftRadius: 10,
    },
  });
  const wordStatus = () => {
    if (wordstatus == "Winner") {
      setData({...data,tittle: "Vencedor",content: "Parabéns, você acertou qual era a palavra correta!"});
    } else {
      setData({...data,tittle: "Perdedor",content: "Tente novamente, desta vez você não conseguiu acertar a palavra correta!"});
    }
    return data;
  };
  useEffect(() => {
    wordStatus();
  }, [showAlert]);
  return (
    <Modal
      visible={showAlert}
      transparent={true}
      animationType={"fade"}
      onRequestClose={() => onClose()}
    >
      <View style={styles.outerview}>
        <View style={styles.modalBox}>
          <View style={styles.header}>
            <Text style={styles.tittleHeader}>{data.tittle}</Text>
          </View>
          <SeparatorLine height={2} color={colorStatus} />
          <View style={styles.messageBox}>
            <Text style={{ textAlign: "center" }}>{data.content}</Text>
            <Text style={{ textAlign: "center" }}></Text>
            <View style={{ width: "100%" }}>
              <Text style={styles.wordTittle}>{word}</Text>
            </View>
          </View>
          <SeparatorLine height={2} color={colorStatus} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => onClose()}>
              <View style={styles.button}>
                <Text style={{ color: "#fff" }}>OK</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => OnMenu()}>
              <View style={styles.buttonMenu}>
                <Text style={{ color: colorStatus, fontWeight: "700" }}>
                  Menu Inicial
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
