import { View, Text, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { styles } from "./styles";
import { setStorageDefault } from "../../../services/database";
import { useNavigation } from "@react-navigation/native";
import ButtonSimple from "../../../components/buttons/buttonSimple";
import SeparatorLine from "../../../components/SeparatorLine";
export default function Home() {
  const navigation = useNavigation();
  useEffect(() => {
    setStorageDefault();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.body}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => navigation.navigate("HowToPlay")}>
            <Text style={styles.howPlay}>COMO JOGAR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.page}>
          <Text style={styles.tittle}>LETTERS</Text>
          <Text style={styles.subtittle}>GAME</Text>
          <SeparatorLine height={4} color={"#FFF"} />
          <Text style={styles.subtittle2}>O JOGO DAS PALAVRAS</Text>
          <View style={styles.buttons}>
            <ButtonSimple destiny="CasualGame" text="JOGAR" />
            <ButtonSimple destiny="Profile" text="PERFIL" />
          </View>
          <Text style={styles.subtittle2}>
            DESENVOLVIDO POR ALEX VIEIRA DIAS
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}