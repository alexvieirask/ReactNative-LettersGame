import { View, Text, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
import ButtonSimple from "../../components/buttons/ButtonSimple";
import { useEffect } from "react";
import { styles } from "../../assets/styles/Home";
import { setStorageDefault } from "../../services/asyncStorage";
import SeparatorLine from "../../components/SeparatorLine";
import { useNavigation } from "@react-navigation/native";
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