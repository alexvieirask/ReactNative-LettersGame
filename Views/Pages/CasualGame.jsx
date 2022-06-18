import React from "react";
import { styles } from "../../assets/styles/CasualGame";
import { View, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import RowSquare from "../../components/mapword/rowSquare";
import AnswerCheck from "../../components/modals/AnswerCheck";
import ToastWarning from "../../components/modals/ToastWarning";
import words from "../../services/words";
import Keyboard from "../../components/keyboard/keyboard";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CasualGame() {
  const listWords = words
  const DEFAULT_ROW = {
    letters: [],
    word_complete: false,
  };
  const KEYS = {
    ONFOCUS: "ONFOCUS",
    DEFAULT: "DEFAULT",
    GREEN: "GREEN",
    YELLOW: "YELLOW",
    RED: "RED"
  };
  const [Toast, setToast] = useState({
    visible: false,
    message: "Palavra não encontrada",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [word, setWord] = useState(null);
  const [letter, setLetter] = useState(null);
  const [wordStatus, setWordStatus] = useState(null);
  const [firstRow, setFirstRow] = useState(DEFAULT_ROW);
  const [secondRow, setSecondRow] = useState(DEFAULT_ROW);
  const [threeRow, setThreeRow] = useState(DEFAULT_ROW);
  const [fourRow, setFourRow] = useState(DEFAULT_ROW);
  const [fiveRow, setFiveRow] = useState(DEFAULT_ROW);
  const [sixRow, setSixRow] = useState(DEFAULT_ROW);
  async function statisticsInitialSet(){
    var response = await AsyncStorage.getItem("@statistics:matchs");
    var json_response = JSON.parse(response);
    const statistics = {
      wonGames: json_response.wonGames,
      lostGames: json_response.lostGames + 1,
    };
    await AsyncStorage.removeItem("@statistics:matchs");
    await AsyncStorage.setItem(
      "@statistics:matchs",
      JSON.stringify(statistics)
    );
  };
  async function statisticsWinner(){
    var response = await AsyncStorage.getItem("@statistics:matchs");
    var json_response = JSON.parse(response);
    const statistics = {
      wonGames: json_response.wonGames + 1,
      lostGames: json_response.lostGames - 1,
    };
    await AsyncStorage.removeItem("@statistics:matchs");
    await AsyncStorage.setItem(
      "@statistics:matchs",
      JSON.stringify(statistics)
    );
  };
  const resetGame = () => {
    setFirstRow(DEFAULT_ROW);
    setSecondRow(DEFAULT_ROW);
    setThreeRow(DEFAULT_ROW);
    setFourRow(DEFAULT_ROW);
    setFiveRow(DEFAULT_ROW);
    setSixRow(DEFAULT_ROW);
    setWord(null);
  };
  const gameStatus = () => {
    if (allLinesStringfy().includes(word)) {
      setWordStatus("Winner");
      setShowAlert(true);
      statisticsWinner();
    } else {
      if (sixRow.word_complete == true) {
        setWordStatus("Loser");
        setShowAlert(true);
      }
    }
  };
  const randomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };
  const defineWord = () => {
    word == null && setWord(randomWord().toUpperCase());
  };
  const firstLineStringfy = () => {
    return `${firstRow.letters[0]}${firstRow.letters[1]}${firstRow.letters[2]}${firstRow.letters[3]}${firstRow.letters[4]}`;
  };
  const secondLineStringfy = () => {
    return `${secondRow.letters[0]}${secondRow.letters[1]}${secondRow.letters[2]}${secondRow.letters[3]}${secondRow.letters[4]}`;
  };
  const threeLineStringfy = () => {
    return `${threeRow.letters[0]}${threeRow.letters[1]}${threeRow.letters[2]}${threeRow.letters[3]}${threeRow.letters[4]}`;
  };
  const fourLineStringfy = () => {
    return `${fourRow.letters[0]}${fourRow.letters[1]}${fourRow.letters[2]}${fourRow.letters[3]}${fourRow.letters[4]}`;
  };
  const fiveLineStringfy = () => {
    return `${fiveRow.letters[0]}${fiveRow.letters[1]}${fiveRow.letters[2]}${fiveRow.letters[3]}${fiveRow.letters[4]}`;
  };
  const sixLineStringfy = () => {
    return `${sixRow.letters[0]}${sixRow.letters[1]}${sixRow.letters[2]}${sixRow.letters[3]}${sixRow.letters[4]}`;
  };
  const allLinesStringfy = () => {
    return [firstLineStringfy(),secondLineStringfy(),threeLineStringfy(),fourLineStringfy(),fiveLineStringfy(),sixLineStringfy()]
  };
  const statusFirstLineWordIncomplete = () => {
    var statusFirstRow = [];
    if (firstRow.letters.length == 0) {
      statusFirstRow.push(KEYS.ONFOCUS);
    }
    if (firstRow.letters.length > 0) {
      for (var i = 0; i <= firstRow.letters.length; i++) {
        statusFirstRow.push(KEYS.DEFAULT);
      }
      statusFirstRow.pop();
      statusFirstRow.push(KEYS.ONFOCUS);
    }
    if (statusFirstRow.length == 6) {
      statusFirstRow.shift();
    }
    return statusFirstRow;
  };
  const statusFirstLineWordComplete = () => {
    var statusFirstRow = [];
    for (var i = 0; i < word.length; i++) {
      if (word[i] == firstLineStringfy()[i]) {
        statusFirstRow.push(KEYS.GREEN);
      } else {
        statusFirstRow.push(KEYS.DEFAULT);
      }
    }
    for (var i = 0; i < statusFirstRow.length; i++) {
      if (statusFirstRow[i] == KEYS.DEFAULT) {
        if (word.includes(firstLineStringfy()[i])) {
          statusFirstRow[i] = KEYS.YELLOW;
        } else {
          statusFirstRow[i] = KEYS.RED;
        }
      }
    }
    return statusFirstRow;
  };
  const statusSecondLineWordIncomplete = () => {
    var statusSecondRow = [];
    if (secondRow.letters.length == 0) {
      statusSecondRow.push(KEYS.ONFOCUS);
    }
    if (secondRow.letters.length > 0) {
      for (var i = 0; i <= secondRow.letters.length; i++) {
        statusSecondRow.push(KEYS.DEFAULT);
      }
      statusSecondRow.pop();
      statusSecondRow.push(KEYS.ONFOCUS);
    }
    if (statusSecondRow.length == 6) {
      statusSecondRow.shift();
    }
    return statusSecondRow;
  };
  const statusSecondLineWordComplete = () => {
    var statusSecondRow = [];
    for (var i = 0; i < secondRow.letters.length; i++) {
      if (word[i] == secondLineStringfy()[i]) {
        statusSecondRow.push(KEYS.GREEN);
      } else {
        statusSecondRow.push(KEYS.DEFAULT);
      }
    }
    for (var i = 0; i < statusSecondRow.length; i++) {
      if (statusSecondRow[i] == KEYS.DEFAULT) {
        if (word.includes(secondLineStringfy()[i])) {
          statusSecondRow[i] = KEYS.YELLOW;
        } else {
          statusSecondRow[i] = KEYS.RED;
        }
      }
    }
    return statusSecondRow;
  };
  const statusThreeLineWordIncomplete = () => {
    var statusThreeRow = [];
    if (threeRow.letters.length == 0) {
      statusThreeRow.push(KEYS.ONFOCUS);
    }
    if (threeRow.letters.length > 0) {
      for (var i = 0; i <= threeRow.letters.length; i++) {
        statusThreeRow.push(KEYS.DEFAULT);
      }
      statusThreeRow.pop();
      statusThreeRow.push(KEYS.ONFOCUS);
    }

    if (statusThreeRow.length == 6) {
      statusThreeRow.shift();
    }
    return statusThreeRow;
  };
  const statusThreeLineWordComplete = () => {
    var statusThreeRow = [];
    for (var i = 0; i < threeRow.letters.length; i++) {
      if (word[i] == threeLineStringfy()[i]) {
        statusThreeRow.push(KEYS.GREEN);
      } else {
        statusThreeRow.push(KEYS.DEFAULT);
      }
    }
    for (var i = 0; i < statusThreeRow.length; i++) {
      if (statusThreeRow[i] == KEYS.DEFAULT) {
        if (word.includes(threeLineStringfy()[i])) {
          statusThreeRow[i] = KEYS.YELLOW;
        } else {
          statusThreeRow[i] = KEYS.RED;
        }
      }
    }
    return statusThreeRow;
  };
  const statusFourLineWordIncomplete = () => {
    var statusFourRow = [];
    if (fourRow.letters.length == 0) {
      statusFourRow.push(KEYS.ONFOCUS);
    }
    if (fourRow.letters.length > 0) {
      for (var i = 0; i <= fourRow.letters.length; i++) {
        statusFourRow.push(KEYS.DEFAULT);
      }
      statusFourRow.pop();
      statusFourRow.push(KEYS.ONFOCUS);
    }

    if (statusFourRow.length == 6) {
      statusFourRow.shift();
    }
    return statusFourRow;
  };
  const statusFourLineWordComplete = () => {
    var statusFourRow = [];
    for (var i = 0; i < fourRow.letters.length; i++) {
      if (word[i] == fourLineStringfy()[i]) {
        statusFourRow.push(KEYS.GREEN);
      } else {
        statusFourRow.push(KEYS.DEFAULT);
      }
    }
    for (var i = 0; i < statusFourRow.length; i++) {
      if (statusFourRow[i] == KEYS.DEFAULT) {
        if (word.includes(fourLineStringfy()[i])) {
          statusFourRow[i] = KEYS.YELLOW;
        } else {
          statusFourRow[i] = KEYS.RED;
        }
      }
    }
    return statusFourRow;
  };
  const statusFiveLineWordIncomplete = () => {
    var statusFiveRow = [];
    if (fiveRow.letters.length == 0) {
      statusFiveRow.push(KEYS.ONFOCUS);
    }
    if (fiveRow.letters.length > 0) {
      for (var i = 0; i <= fiveRow.letters.length; i++) {
        statusFiveRow.push(KEYS.DEFAULT);
      }
      statusFiveRow.pop();
      statusFiveRow.push(KEYS.ONFOCUS);
    }
    if (statusFiveRow.length == 6) {
      statusFiveRow.shift();
    }
    return statusFiveRow;
  };
  const statusFiveLineWordComplete = () => {
    var statusFiveRow = [];
    for (var i = 0; i < fiveRow.letters.length; i++) {
      if (word[i] == fiveLineStringfy()[i]) {
        statusFiveRow.push(KEYS.GREEN);
      } else {
        statusFiveRow.push(KEYS.DEFAULT);
      }
    }
    for (var i = 0; i < statusFiveRow.length; i++) {
      if (statusFiveRow[i] == KEYS.DEFAULT) {
        if (word.includes(fiveLineStringfy()[i])) {
          statusFiveRow[i] = KEYS.YELLOW;
        } else {
          statusFiveRow[i] = KEYS.RED;
        }
      }
    }
    return statusFiveRow;
  };
  const statusSixLineWordIncomplete = () => {
    var statusSixRow = [];
    if (sixRow.letters.length == 0) {
      statusSixRow.push(KEYS.ONFOCUS);
    }
    if (sixRow.letters.length > 0) {
      for (var i = 0; i <= sixRow.letters.length; i++) {
        statusSixRow.push(KEYS.DEFAULT);
      }
      statusSixRow.pop();
      statusSixRow.push(KEYS.ONFOCUS);
    }
    if (statusSixRow.length == 6) {
      statusSixRow.shift();
    }
    return statusSixRow;
  };
  const statusSixLineWordComplete = () => {
    var statusSixRow = [];
    for (var i = 0; i < sixRow.letters.length; i++) {
      if (word[i] == sixLineStringfy()[i]) {
        statusSixRow.push(KEYS.GREEN);
      } else {
        statusSixRow.push(KEYS.DEFAULT);
      }
    }
    for (var i = 0; i < statusSixRow.length; i++) {
      if (statusSixRow[i] == KEYS.DEFAULT) {
        if (word.includes(sixLineStringfy()[i])) {
          statusSixRow[i] = KEYS.YELLOW;
        } else {
          statusSixRow[i] = KEYS.RED;
        }
      }
    }
    return statusSixRow;
  };
  const statusFirstLine = () => {
    var statusFirstRow = [];
    if (firstRow.word_complete == false) {
      statusFirstRow = statusFirstLineWordIncomplete();
    } else {
      statusFirstRow = statusFirstLineWordComplete();
    }
    return statusFirstRow;
  };
  const statusSecondLine = () => {
    var statusSecondRow = [];
    if ((secondRow.word_complete == false) & (firstRow.word_complete == true)) {
      statusSecondRow = statusSecondLineWordIncomplete();
    } else {
      statusSecondRow = statusSecondLineWordComplete();
    }
    return statusSecondRow;
  };
  const statusThreeLine = () => {
    var statusThreeRow = [];
    if ((threeRow.word_complete == false) & (secondRow.word_complete == true)) {
      statusThreeRow = statusThreeLineWordIncomplete();
    } else {
      statusThreeRow = statusThreeLineWordComplete();
    }
    return statusThreeRow;
  };
  const statusFourLine = () => {
    var statusFourRow = [];
    if ((fourRow.word_complete == false) & (threeRow.word_complete == true)) {
      statusFourRow = statusFourLineWordIncomplete();
    } else {
      statusFourRow = statusFourLineWordComplete();
    }
    return statusFourRow;
  };
  const statusFiveLine = () => {
    var statusFiveRow = [];
    if ((fiveRow.word_complete == false) & (fourRow.word_complete == true)) {
      statusFiveRow = statusFiveLineWordIncomplete();
    } else {
      statusFiveRow = statusFiveLineWordComplete();
    }
    return statusFiveRow;
  };
  const statusSixLine = () => {
    var statusSixRow = [];
    if ((sixRow.word_complete == false) & (fiveRow.word_complete == true)) {
      statusSixRow = statusSixLineWordIncomplete();
    } else {
      statusSixRow = statusSixLineWordComplete();
    }
    return statusSixRow;
  };
  const firstLineLenghtMax = () => {
    return firstRow.letters.length == 5;
  };
  const secondLineLenghtMax = () => {
    return secondRow.letters.length == 5;
  };
  const threeLineLenghtMax = () => {
    return threeRow.letters.length == 5;
  };
  const fourLineLenghtMax = () => {
    return fourRow.letters.length == 5;
  };
  const fiveLineLenghtMax = () => {
    return fiveRow.letters.length == 5;
  };
  const sixLineLenghtMax = () => {
    return sixRow.letters.length == 5;
  };
  const verifyFirstLineWord = () =>{
    if (listWords.includes(firstLineStringfy())) {
     setFirstRow({ ...firstRow, word_complete: true });
    } else {
      setToast({ ...Toast, visible: true });
    }
  };
  const verifySecondLineWord = () =>{
    if (listWords.includes(secondLineStringfy())) {
    setSecondRow({ ...secondRow, word_complete: true });
    } else {
      setToast({ ...Toast, visible: true });
    }
  };
  const verifyThreeLineWord = () =>{
    if (listWords.includes(threeLineStringfy())) {
      setThreeRow({ ...threeRow, word_complete: true });
    } else {
      setToast({ ...Toast, visible: true });
    }
  };
  const verifyFourLineWord = () =>{
    if (listWords.includes(fourLineStringfy())) {
      setFourRow({ ...fourRow, word_complete: true });
    } else {
      setToast({ ...Toast, visible: true });
    }
  };
  const verifyFiveLineWord = () =>{
    if (listWords.includes(fiveLineStringfy())) {
      setFiveRow({ ...fiveRow, word_complete: true });
    } else {
      setToast({ ...Toast, visible: true });
    }
  };
  const verifySixLineWord = () =>{
    if (listWords.includes(sixLineStringfy())) {
      setSixRow({ ...sixRow, word_complete: true });
    } else {
      setToast({ ...Toast, visible: true });
    }
  };
  const onPressEnter = () =>{
    if (firstRow.word_complete == false){ 
      verifyFirstLineWord() 
    }
    if (firstRow.word_complete == true){
      verifySecondLineWord()
    }
    if (secondRow.word_complete == true) {
      verifyThreeLineWord()
    }
    if (threeRow.word_complete == true) {
      verifyFourLineWord()
    }
    if (fourRow.word_complete == true) {
      verifyFiveLineWord()
    }
    if (fiveRow.word_complete == true) {
      verifySixLineWord()
    }
  }
  const onPressDelete = () =>{
    if (firstRow.word_complete == false) {
      setFirstRow({...firstRow,letters: [...firstRow.letters.slice(0, -1)]});
    }
    if (secondRow.word_complete == false & firstRow.word_complete == true) {
      setSecondRow({...secondRow,letters: [...secondRow.letters.slice(0, -1)]});
    }
    if (threeRow.word_complete == false  & secondRow.word_complete == true) {
      setThreeRow({...threeRow,letters: [...threeRow.letters.slice(0, -1)]});
    }
    if (fourRow.word_complete == false  & threeRow.word_complete == true) {
      setFourRow({...fourRow,letters: [...fourRow.letters.slice(0, -1)],});
    }
    if (fiveRow.word_complete == false  & fourRow.word_complete == true) {
      setFiveRow({...fiveRow,letters: [...fiveRow.letters.slice(0, -1)]});
    }
    if (sixRow.word_complete == false  & fiveRow.word_complete == true) {
      setSixRow({ ...sixRow, letters: [...sixRow.letters.slice(0, -1)] });
    }
  }
  const addToList = () => {
    if (letter != undefined) {
      const Letter = letter.trim();
      if (Letter != "Delete" & Letter != "Enter") {
        if (firstLineLenghtMax() == false) {
          setFirstRow({...firstRow, letters: [...firstRow.letters, Letter] });
        }
        if (secondLineLenghtMax() == false & firstRow.word_complete == true) {
          setSecondRow({...secondRow, letters:[...secondRow.letters, Letter]});
        }
        if (threeLineLenghtMax() == false & secondRow.word_complete == true) {
          setThreeRow({...threeRow, letters: [...threeRow.letters, Letter]});
        }
        if (fourLineLenghtMax() == false & threeRow.word_complete == true){
          setFourRow({...fourRow, letters: [...fourRow.letters, Letter]});
        }
        if (fiveLineLenghtMax() == false & fourRow.word_complete == true) {
          setFiveRow({...fiveRow, letters: [...fiveRow.letters, Letter]});
        }
        if (sixLineLenghtMax() == false & fiveRow.word_complete == true) {
          setSixRow({...sixRow, letters: [...sixRow.letters, Letter]});
        }
      }   
      if (Letter === "Enter") {
        onPressEnter()
      }
      if (Letter === "Delete") {
        onPressDelete()
      }
    }
  };
  const status = {
    firstLine: statusFirstLine(),
    secondLine:statusSecondLine(),
    threeLine:statusThreeLine(),
    fourLine:statusFourLine(),
    fiveLine:statusFiveLine(),
    sixLine:statusSixLine(),
  };
  useEffect(() => {
    gameStatus();
  },[ firstRow.word_complete, secondRow.word_complete, threeRow.word_complete, fourRow.word_complete, fiveRow.word_complete, sixRow.word_complete]);
  useEffect(() => {
    addToList();
  }, [letter]);
  useEffect(() => {
    defineWord();
    statisticsInitialSet();
  }, [word]);
  console.log(fiveRow.letters[0])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <AnswerCheck
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          word={word}
          wordstatus={wordStatus}
          ActionPress={resetGame}
        />
        <RowSquare
          status={status.firstLine}
          letters={firstRow.letters}
          wordcomplete={firstRow.word_complete}
        />
         <RowSquare
          wordcomplete={secondRow.word_complete}
          status={status.secondLine}
          letters={secondRow.letters}
        />
        <RowSquare
          wordcomplete={threeRow.word_complete}
          status={status.threeLine}
          letters={threeRow.letters}
        />
        <RowSquare
          wordcomplete={fourRow.word_complete}
          status={status.fourLine}
          letters={fourRow.letters}
        />
        <RowSquare
          wordcomplete={fiveRow.word_complete}
          status={status.fiveLine}
          letters={fiveRow.letters}
        />
        <RowSquare
          wordcomplete={sixRow.word_complete}
          status={status.sixLine}
          letters={sixRow.letters}
        /> 
        <ToastWarning Toast={Toast} set_Toast={setToast} />
      </View>
      <Keyboard letter={letter} setLetter={setLetter} />
    </SafeAreaView>
  );
}