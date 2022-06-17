import { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import SeparatorLine from "../../components/SeparatorLine";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { VictoryPie } from "victory-native";
import { styles } from "../../assets/styles/Profile";

export default function Profile() {
  const [data, setData] = useState([]);
  const dataGraph = [
    {
      label: "Vitórias",
      value: data.wonGames,
      color: "#40c900",
    },
    {
      label: "Derrotas",
      value: data.lostGames,
      color: "#f54257",
    },
  ];

  const percentWonGames = () => {
    return `${((data.wonGames / (data.wonGames + data.lostGames)) * 100).toFixed(2)} %`
  };

  const percentLostGames = () => {
    return `${((data.lostGames / (data.wonGames + data.lostGames)) * 100).toFixed(2)} %`
  };

  async function statisticsGet() {
    var response = await AsyncStorage.getItem("@statistics:matchs");
    var json_response = JSON.parse(response);
    setData(json_response);
  }
  // Testes
  async function deletetudo() {
    await AsyncStorage.removeItem("@statistics:matchs");
  }
  useEffect(() => {
    statisticsGet();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.tittle}>ESTATÍSTICAS</Text>
        <SeparatorLine height={4} color={"#FFF"} />
        <Text style={styles.subtittle}>PARTIDAS JOGADAS</Text>
        <Text style={styles.numberSubtittle}>
          {data.wonGames + data.lostGames}
        </Text>
        <View style={{ marginTop: "10%" }}>
          <Text style={styles.statisticsInfo}>VITÓRIAS: {data.wonGames}</Text>
          <Text style={styles.statisticsInfo}>DERROTAS: {data.lostGames}</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <VictoryPie
            data={dataGraph}
            x={"label"}
            y="value"
            innerRadius={90}
            style={{
              labels: {
                fill: "#fff",
                fontSize: 16,
              },
            }}
            padding={90}
            colorScale={dataGraph.map((element) => element.color)}
          />
        </View>
      </View>
      <Text>{percentLostGames()}</Text>
      <Text>{percentWonGames()}</Text>
    </SafeAreaView>
  );
}
