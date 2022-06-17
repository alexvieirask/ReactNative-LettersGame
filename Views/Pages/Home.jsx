import { View, Text, SafeAreaView, StatusBar } from "react-native";
import ButtonSimple from "../../components/buttons/ButtonSimple";
import { useEffect } from "react";
import { styles } from "../../assets/styles/Home";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SeparatorLine from "../../components/SeparatorLine";
export default function Home() {
  async function statisticsInitial() {
    var response = await AsyncStorage.getAllKeys();
    if (response.length == 0) {
      const statistics = {
        wonGames: 0,
        lostGames: 0,
      };
      await AsyncStorage.setItem(
        "@statistics:matchs",
        JSON.stringify(statistics)
      );
    }
  }
  useEffect(() => {
    statisticsInitial();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.body}>
        <View style={styles.icon}>
          <Text style={styles.howPlay}>COMO JOGAR</Text>
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
