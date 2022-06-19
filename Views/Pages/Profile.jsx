import { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import SeparatorLine from "../../components/SeparatorLine";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { VictoryPie } from "victory-native";
import { styles } from "../../assets/styles/Profile";

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
          color: "#FFF",
        })
      }
      if (data.lostGames>0){
        structures.push({
          label: "Derrotas",
          value: data.lostGames,
          color: "#525252",
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
          <Text style={styles.tittle}>ESTATÍSTICAS</Text>
            <SeparatorLine height={2} color={"#FFF"} />
            <Text style={styles.subtittle}>PARTIDAS JOGADAS</Text>
            <Text style={styles.numberSubtittle}>
              {data.allMatches}
            </Text>
            <View style={{ justifyContent: "center", alignItems: "center"}}>
              <VictoryPie
                data={datasGraphic()}
                x={"label"}
                y={"value"}
                innerRadius={80}
                padAngle={({ datum }) => datum.y}
                style={{
                  labels: {
                    fill: "#FFF",
                    fontSize: 18,
                    fontWeight:'700'
                  
                  },
                }}
                padding={100}
                colorScale={datasGraphic().map((element) => element.color)}
              />
            </View>
          </View>
        </SafeAreaView>
      )}
