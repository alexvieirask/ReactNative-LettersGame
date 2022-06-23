import { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { VictoryPie } from "victory-native";
import { styles } from "../../assets/styles/Profile";
import SeparatorLine from "../../components/SeparatorLine";

export default function Profile() {
  const {getItem} = useAsyncStorage("@statistics:matches")
  const [data, setData] =  useState({});
  const getStatistics = async () => {
    try{
      var results = await getItem()
      var JSONresults = JSON.parse(results)
      JSONresults.allMatches = JSONresults.wonGames + JSONresults.lostGames
      if (JSONresults.percentWon != '0%' | JSONresults.percentLost != '0%'){
        JSONresults.percentWon = `${((JSONresults.wonGames / (JSONresults.wonGames + JSONresults.lostGames)) * 100).toFixed()}%`
        JSONresults.percentLost = `${((JSONresults.lostGames / (JSONresults.wonGames + JSONresults.lostGames)) * 100).toFixed()}%`
      } 
      setData(JSONresults)
    }
    catch(error){
      console.log(error)
    }
  }
  const datasGraphic = () =>{
    var structures = []
      if (data.wonGames>0){
        structures.push({
          label: "Vitórias",
          value: data.wonGames,
          color: "#00b509",
        })
      }
      if (data.lostGames>0){
        structures.push({
          label: "Derrotas",
          value: data.lostGames,
          color: "#fc2c03",
        })
      }
    return structures
  } 
  useEffect(() => {
      getStatistics();
    }, []);
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.tittle}>Estatísticas</Text>
        <SeparatorLine height={1} color={"#FFF"} />
        <View style={{ justifyContent: "center" }}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.subtittle}>Suas Partidas</Text>
            <View style={styles.graphicContainer}>
              <VictoryPie
                data={datasGraphic()}
                x={(element) => element.label}
                y={(element) => element.value}
                colorScale={datasGraphic().map((element) => element.color)}
                padAngle={({ datum }) => datum.value}
                innerRadius={70}
                style={{
                  labels: {
                    fill: "#000",
                    fontSize: 14,
                  },
                }}
                padding={30}
                height={250}
              />
            </View>
          </View>
          <Text style={styles.tittle}>Informações</Text>
          <SeparatorLine height={1} color={"#fff"} />
          <View style={styles.allMatchesContainer}>
            <Text style={styles.informationLabelType1}>PARTIDAS JOGADAS</Text>
            <Text style={styles.informationLabelType2}>{data.allMatches}</Text>
          </View>
          <View style={styles.percentMatchesContainer}>
            <Text style={styles.informationLabelType1}>Derrotas: {data.percentLost}</Text>
            <Text style={styles.informationLabelType1}>Vitórias: {data.percentWon}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
