import { styles } from "./styles";
import { View, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import { setMatchesPlayed, setMatchWinner } from "../../../services/database/index";
import { statusFirstLine,statusSecondLine,statusThreeLine,statusFourLine,statusFiveLine,statusSixLine } from "../../../services/game/functions/style/rows";
import { stringfyRow, allRowsStringfy, lineLenghtMax, randomWord } from "../../../services/game/functions/index";
import { default_row } from "../../../services/game/const";  
import React from "react";
import RowSquare from "../../../components/mapword/rowSquare";
import AnswerCheck from "../../../components/modals/AnswerCheck";
import ToastWarning from "../../../components/modals/ToastWarning";
import words from "../../../services/game/listofwords";
import Keyboard from "../../../components/keyboard/main";

export default function CasualGame() {
  const [Toast, setToast] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [word, setWord] = useState('game start');
  const [letter, setLetter] = useState(null);
  const [wordStatus, setWordStatus] = useState(null);
  const [firstRow, setFirstRow] = useState(default_row);
  const [secondRow, setSecondRow] = useState(default_row);
  const [threeRow, setThreeRow] = useState(default_row);
  const [fourRow, setFourRow] = useState(default_row);
  const [fiveRow, setFiveRow] = useState(default_row);
  const [sixRow, setSixRow] = useState(default_row);
  const rows_letters = [firstRow.letters,secondRow.letters,threeRow.letters,fourRow.letters,fiveRow.letters,sixRow.letters]
  const rows_complete_status = [firstRow.word_complete, secondRow.word_complete, threeRow.word_complete, fourRow.word_complete, fiveRow.word_complete, sixRow.word_complete] 

  const status = {
    firstLine: statusFirstLine(firstRow.word_complete,firstRow.letters,word),
    secondLine:statusSecondLine(firstRow.word_complete,secondRow.word_complete,secondRow.letters,word),
    threeLine:statusThreeLine(secondRow.word_complete,threeRow.word_complete,threeRow.letters,word),
    fourLine:statusFourLine(threeRow.word_complete,fourRow.word_complete,fourRow.letters,word),
    fiveLine:statusFiveLine(fourRow.word_complete,fiveRow.word_complete,fiveRow.letters,word),
    sixLine:statusSixLine(fiveRow.word_complete,sixRow.word_complete,sixRow.letters,word),
  };

  
  /* Mostra um Alerta para o usu??rio */
  function showToastWarning() {
    setToast(true)
  }
  
/* Reinicia o jogo */
  function resetGame(){
    setFirstRow(default_row);
    setSecondRow(default_row);
    setThreeRow(default_row);
    setFourRow(default_row);
    setFiveRow(default_row);
    setSixRow(default_row);
    setWord('game start');
  };

/* Verifica o andamento da partida, se o usu??rio acertou a palavra ou usou todas as tentativas */
  function gameStatus(){
    if (allRowsStringfy(rows_letters).includes(word)){
      setWordStatus("Winner");
      setShowAlert(true);
      setMatchWinner();
    } else {
      if (sixRow.word_complete == true) {
        setWordStatus("Loser");
        setShowAlert(true);
      }
    }
  };

/* Gera e define uma palavra aleatoria para ser descoberta na partida */
  function defineWord(){
    if (word == "game start"){
      setWord(randomWord().toUpperCase())
    }
  }

/* Verifica se a palavra digitada na primeira linha existe na lista */
  function verifyFirstLineWord(){
    if (words.includes(stringfyRow(firstRow.letters))) {
     setFirstRow({ ...firstRow, word_complete: true });
    } else {
      showToastWarning()
    }
  };
  
  function verifySecondLineWord(){
    if (words.includes(stringfyRow(secondRow.letters))) {
    setSecondRow({ ...secondRow, word_complete: true });
    } else {
      showToastWarning()
    }
  };
  
  function verifyThreeLineWord(){
    if (words.includes(stringfyRow(threeRow.letters))) {
      setThreeRow({ ...threeRow, word_complete: true });
    } else {
      showToastWarning();
    }
  };
  
  function verifyFourLineWord (){
    if (words.includes(stringfyRow(fourRow.letters))) {
      setFourRow({ ...fourRow, word_complete: true });
    } else {
      showToastWarning();
    }
  };
  
  function verifyFiveLineWord(){
    if (words.includes(stringfyRow(fiveRow.letters))) {
      setFiveRow({ ...fiveRow, word_complete: true });
    } else {
      showToastWarning();
    }
  };
  
  function verifySixLineWord(){
    if (words.includes(stringfyRow(sixRow.letters))) {
      setSixRow({ ...sixRow, word_complete: true });
    } else {
      showToastWarning();
    }
  };
  
/* Valida????es necess??rias quando o usu??rio tenta confirmar uma palavra escolhida */
  function onPressEnter(){
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

/* Possui como objetivo remover a ??ltima letra digitada da lista */
  function onPressDelete(){
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
  };

/* Possui como objetivo adicionar uma letra na lista */
  function onAddLetter(){
    const Letter = letter.trim();
    if (lineLenghtMax(rows_letters[0]) == false) {
      setFirstRow({...firstRow, letters: [...firstRow.letters, Letter] });
    }
    if (lineLenghtMax(rows_letters[1]) == false & firstRow.word_complete == true) {
      setSecondRow({...secondRow, letters:[...secondRow.letters, Letter]});
    }
    if (lineLenghtMax(rows_letters[2]) == false & secondRow.word_complete == true) {
      setThreeRow({...threeRow, letters: [...threeRow.letters, Letter]});
    }
    if (lineLenghtMax(rows_letters[3]) == false & threeRow.word_complete == true){
      setFourRow({...fourRow, letters: [...fourRow.letters, Letter]});
    }
    if (lineLenghtMax(rows_letters[4]) == false & fourRow.word_complete == true) {
      setFiveRow({...fiveRow, letters: [...fiveRow.letters, Letter]});
    }
    if (lineLenghtMax(rows_letters[5]) == false & fiveRow.word_complete == true) {
      setSixRow({...sixRow, letters: [...sixRow.letters, Letter]});
    }
  }
  
/* Realiza o filtro do objetivo do usu??rio ao pressionar alguma tecla */
  function onPressKeyboard(){
    if (letter != undefined) {
      const Letter = letter.trim();
      if (Letter === "Enter") {
        onPressEnter()
      }
      else if (Letter === "Delete") {
        onPressDelete()
      } 
      else{
          onAddLetter()
      }
    }
  };

  useEffect(() => {
    defineWord();
    setMatchesPlayed();
  }, [word]); 

  useEffect(() => {
    onPressKeyboard();
  }, [letter]);
  
  useEffect(() => {
    gameStatus();
  },[rows_complete_status]);
  
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