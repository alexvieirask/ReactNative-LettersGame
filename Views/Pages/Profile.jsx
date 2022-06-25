import { useState, useEffect } from "react";
import { View, Text, SafeAreaView,Animated,StyleSheet} from "react-native";
import { getItem } from "../../services/asyncStorage";
import { VictoryPie } from "victory-native";
import { styles } from "../../assets/styles/Profile";
import SeparatorLine from "../../components/SeparatorLine";
import { graphic } from "../../services/structures";

export default function Profile() {
  const [data, setData] =  useState({});
  const [op,setOp] = useState(new Animated.Value(0));
  const styleAnimated = StyleSheet.create({
    bodyConteiner:{
    marginTop:'5%',
    marginHorizontal:'2%',
    opacity:op
    }
  }) 
  const animationOpacity = () => {
    Animated.timing(op, {
      toValue: 1,
      duration: 750,
      useNativeDriver: false,
    }).start();
  };
  const getStorageData = async () => {
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
  };
  const setDataGraphic = () =>{
    var graphic_data = graphic
    graphic_data.victory.value = data.wonGames
    graphic_data. defeat.value = data.lostGames
    return graphic_data
  };
  const getDataGraphic = () =>{
    var graphic_data = []
    if (data.wonGames>0){
      graphic_data.push(setDataGraphic().victory)
    }
    if (data.lostGames>0){
      graphic_data.push(setDataGraphic().defeat)
    }
    return graphic_data
  };
  useEffect(() => {
    animationOpacity()
    getStorageData()
    }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Animated.View style={styleAnimated.bodyConteiner}>
        <Text style={styles.tittle}>Estatísticas</Text>
        <SeparatorLine height={1} color={"#FFF"} mH={'5%'} />
        <View style={{ justifyContent: "center" }}>      
          <View style={{ alignItems: "center" }}>
            <Text style={styles.subtittle}>Suas Partidas</Text>
            <View style={styles.graphicContainer}>
              {data.allMatches>0 ?  <VictoryPie
                data={getDataGraphic()}
                x={(element) => element.label}
                y={(element) => element.value}
                colorScale={getDataGraphic().map((element) => element.color)}
                innerRadius={60}
                style={{
                  labels: {
                    fill: "#000",
                    fontSize: 14,
                  },
                }}
                padding={50}
                height={260}
              />: <Text style={styles.informationLabelType3}>Não há nada para ser mostrado</Text>}
            </View>
          </View>    
          <SeparatorLine height={1} color={"#fff"}  mH={'5%'} />
          <View style={styles.allMatchesContainer}>
            <Text style={styles.informationLabelType1}>PARTIDAS JOGADAS</Text>
            <Text style={styles.informationLabelType2}>{data.allMatches}</Text>
          </View>
          <View style={styles.percentMatchesContainer}>
            <Text style={styles.informationLabelType1}>Derrotas: {data.percentLost}</Text>
            <Text style={styles.informationLabelType1}>Vitórias: {data.percentWon}</Text>
          </View>
          </View>
        </Animated.View>
        </View>
    </SafeAreaView>
  );
}