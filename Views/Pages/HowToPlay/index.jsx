import { View, Text, StatusBar, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { example_row } from "../../../services/game/const/example";
import React from "react";
import SeparatorLine from "../../../components/SeparatorLine";
import RowSquare from "../../../components/mapword/rowSquare";

export default function HowToplay() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.bodyContainer}>
        <View style={styles.body}>
          <View style={{ paddingTop: "2%" }}>
            <Text style={styles.tittle}>LettersGame</Text>
          </View>
          <View style={{ marginTop: "2%" }}>
            <Text style={styles.paragraph}>
              É um jogo de estratégia, onde você tem que descobrir qual a
              palavra que foi gerada aleatoriamente.
            </Text>
          </View>
          <SeparatorLine height={1} color={"#dbdbdb"} />
          <View style={{ paddingTop: "2%" }}>
            <Text style={styles.tittle}>Como Jogar?</Text>
          </View>
          <View style={{ marginTop: "2%" }}>
            <Text style={styles.paragraph}>
              Para começar basta digitar uma palavra qualquer, logo após cada
              letra receberá uma cor que vai permitir com que você descubra qual
              a palavra da partida. Você possui 6 tentativas ao total para
              descobrir a palavra.
            </Text>
          </View>
          <SeparatorLine height={1} color={"#dbdbdb"} />
          <View style={{ paddingTop: "2%" }}>
            <Text style={styles.tittle}>Cores</Text>
          </View>
          <View style={styles.containerExampleRow}>
            <RowSquare letters={example_row.word} status={example_row.status} wordcomplete={true} />
          </View>

          <View style={{ marginTop: "5%" }}>
            <Text style={styles.paragraph}>
              Amarelo: A letra está presente na palavra, porém não está na
              posição correta.
            </Text>
            <View style={{ marginTop: "2%" }}>
              <Text style={styles.paragraph}>
                Verde: A letra está presente na palavra e na posição correta.
              </Text>
            </View>
            <View style={{ marginTop: "2%" }}>
              <Text style={styles.paragraph}>
                Cinza: A letra não está presente na palavra.
              </Text>
            </View>
          </View>
    
        </View>
      </View>
    </SafeAreaView>
  );
}