import { stringfyRow } from "./gamefunctions";
import { type } from "./structures";
const statusFirstLine = (word_complete, first_row_letter, word) => {
  var statusFirstRow = [];
  if (word_complete == false) {
    statusFirstRow = statusFirstLineWordIncomplete(first_row_letter);
  } else {
    statusFirstRow = statusFirstLineWordComplete(first_row_letter, word);
  }
  return statusFirstRow;
};

const statusSecondLine = (word_complete_anterior,word_complete_atual,second_row_letter,word)=> {
  var statusSecondRow = [];
  if ((word_complete_atual == false) & (word_complete_anterior == true)) {
    statusSecondRow = statusSecondLineWordIncomplete(second_row_letter);
  } else {
    statusSecondRow = statusSecondLineWordComplete(second_row_letter,word);
  }
  return statusSecondRow;
};

const statusThreeLine = (word_complete_anterior,word_complete_atual,three_row_letter,word) => {
  var statusThreeRow = [];
  if ((word_complete_atual == false) & (word_complete_anterior == true)) {
    statusThreeRow = statusThreeLineWordIncomplete(three_row_letter);
  } else {
    statusThreeRow = statusThreeLineWordComplete(three_row_letter,word);
  }
  return statusThreeRow;
};

const statusFourLine = (word_complete_anterior,word_complete_atual,four_row_letter,word) => {
  var statusFourRow = [];
  if ((word_complete_atual == false) & (word_complete_anterior == true)) {
    statusFourRow = statusFourLineWordIncomplete(four_row_letter);
  } else {
    statusFourRow = statusFourLineWordComplete(four_row_letter,word);
  }
  return statusFourRow;
};
const statusFiveLine = (word_complete_anterior,word_complete_atual,five_row_letter,word) => {
  var statusFiveRow = [];
  if ((word_complete_atual == false) & (word_complete_anterior == true)) {
    statusFiveRow = statusFiveLineWordIncomplete(five_row_letter);
  } else {
    statusFiveRow = statusFiveLineWordComplete(five_row_letter,word);
  }
  return statusFiveRow;
};
const statusSixLine = (word_complete_anterior,word_complete_atual,six_row_letter,word) => {
  var statusSixRow = [];
  if ((word_complete_atual == false) & (word_complete_anterior == true)) {
    statusSixRow = statusSixLineWordIncomplete(six_row_letter);
  } else {
    statusSixRow = statusSixLineWordComplete(six_row_letter,word);
  }
  return statusSixRow;
};

const statusFirstLineWordIncomplete = (first_row_letter) => {
  var statusFirstRow = [];
  if (first_row_letter.length == 0) {
    statusFirstRow.push(type.focus);
  }
  if (first_row_letter.length > 0) {
    for (var i = 0; i <= first_row_letter.length; i++) {
      statusFirstRow.push(type.default);
    }
    statusFirstRow.pop();
    statusFirstRow.push(type.focus);
  }
  if (statusFirstRow.length == 6) {
    statusFirstRow.shift();
  }
  return statusFirstRow;
};
const statusFirstLineWordComplete = (first_row_letter, word) => {
  var statusFirstRow = [];
  for (var i = 0; i < 5; i++) {
    if (word[i] == stringfyRow(first_row_letter)[i]) {
      statusFirstRow.push(type.green);
    } else {
      statusFirstRow.push(type.default);
    }
  }
  for (var i = 0; i < statusFirstRow.length; i++) {
    if (statusFirstRow[i] == type.default) {
      if (word.includes(stringfyRow(first_row_letter)[i])) {
        statusFirstRow[i] = type.yellow;
      } else {
        statusFirstRow[i] = type.red;
      }
    }
  }
  return statusFirstRow;
};
const statusSecondLineWordIncomplete = (second_row_letter) => {
  var statusSecondRow = [];
  if (second_row_letter.length == 0) {
    statusSecondRow.push(type.focus);
  }
  if (second_row_letter.length > 0) {
    for (var i = 0; i <= second_row_letter.length; i++) {
      statusSecondRow.push(type.default);
    }
    statusSecondRow.pop();
    statusSecondRow.push(type.focus);
  }
  if (statusSecondRow.length == 6) {
    statusSecondRow.shift();
  }
  return statusSecondRow;
};
const statusSecondLineWordComplete = (second_row_letter,word) => {
  var statusSecondRow = [];
  for (var i = 0; i < 5; i++) {
    if (word[i] == stringfyRow(second_row_letter)[i]) {
      statusSecondRow.push(type.green);
    } else {
      statusSecondRow.push(type.default);
    }
  }
  for (var i = 0; i < statusSecondRow.length; i++) {
    if (statusSecondRow[i] == type.default) {
      if (word.includes(stringfyRow(second_row_letter)[i])) {
        statusSecondRow[i] = type.yellow;
      } else {
        statusSecondRow[i] = type.red;
      }
    }
  }
  return statusSecondRow;
};
const statusThreeLineWordIncomplete = (three_row_letter) => {
  var statusThreeRow = [];
  if (three_row_letter.length == 0) {
    statusThreeRow.push(type.focus);
  }
  if (three_row_letter.length > 0) {
    for (var i = 0; i <= three_row_letter.length; i++) {
      statusThreeRow.push(type.default);
    }
    statusThreeRow.pop();
    statusThreeRow.push(type.focus);
  }

  if (statusThreeRow.length == 6) {
    statusThreeRow.shift();
  }
  return statusThreeRow;
};
const statusThreeLineWordComplete = (three_row_letter,word) => {
  var statusThreeRow = [];
  for (var i = 0; i < 5; i++) {
    if (word[i] == stringfyRow(three_row_letter)[i]) {
      statusThreeRow.push(type.green);
    } else {
      statusThreeRow.push(type.default);
    }
  }
  for (var i = 0; i < statusThreeRow.length; i++) {
    if (statusThreeRow[i] == type.default) {
      if (word.includes(stringfyRow(three_row_letter)[i])) {
        statusThreeRow[i] = type.yellow;
      } else {
        statusThreeRow[i] = type.red;
      }
    }
  }
  return statusThreeRow;
};
const statusFourLineWordIncomplete = (four_row_letter) => {
  var statusFourRow = [];
  if (four_row_letter.length == 0) {
    statusFourRow.push(type.focus);
  }
  if (four_row_letter.length > 0) {
    for (var i = 0; i <= four_row_letter.length; i++) {
      statusFourRow.push(type.default);
    }
    statusFourRow.pop();
    statusFourRow.push(type.focus);
  }

  if (statusFourRow.length == 6) {
    statusFourRow.shift();
  }
  return statusFourRow;
};
const statusFourLineWordComplete = (four_row_letter,word) => {
  var statusFourRow = [];
  for (var i = 0; i < 5; i++) {
    if (word[i] == stringfyRow(four_row_letter)[i]) {
      statusFourRow.push(type.green);
    } else {
      statusFourRow.push(type.default);
    }
  }
  for (var i = 0; i < statusFourRow.length; i++) {
    if (statusFourRow[i] == type.default) {
      if (word.includes(stringfyRow(four_row_letter)[i])) {
        statusFourRow[i] = type.yellow;
      } else {
        statusFourRow[i] = type.red;
      }
    }
  }
  return statusFourRow;
};
const statusFiveLineWordIncomplete = (five_row_letter) => {
  var statusFiveRow = [];
  if (five_row_letter.length == 0) {
    statusFiveRow.push(type.focus);
  }
  if (five_row_letter.length > 0) {
    for (var i = 0; i <= five_row_letter.length; i++) {
      statusFiveRow.push(type.default);
    }
    statusFiveRow.pop();
    statusFiveRow.push(type.focus);
  }
  if (statusFiveRow.length == 6) {
    statusFiveRow.shift();
  }
  return statusFiveRow;
};
const statusFiveLineWordComplete = (five_row_letter,word) => {
  var statusFiveRow = [];
  for (var i = 0; i < 5; i++) {
    if (word[i] == stringfyRow(five_row_letter)[i]) {
      statusFiveRow.push(type.green);
    } else {
      statusFiveRow.push(type.default);
    }
  }
  for (var i = 0; i < statusFiveRow.length; i++) {
    if (statusFiveRow[i] == type.default) {
      if (word.includes(stringfyRow(five_row_letter)[i])) {
        statusFiveRow[i] = type.yellow;
      } else {
        statusFiveRow[i] = type.red;
      }
    }
  }
  return statusFiveRow;
};
const statusSixLineWordIncomplete = (six_row_letter) => {
  var statusSixRow = [];
  if (six_row_letter.length == 0) {
    statusSixRow.push(type.focus);
  }
  if (six_row_letter.length > 0) {
    for (var i = 0; i <= six_row_letter.length; i++) {
      statusSixRow.push(type.default);
    }
    statusSixRow.pop();
    statusSixRow.push(type.focus);
  }
  if (statusSixRow.length == 6) {
    statusSixRow.shift();
  }
  return statusSixRow;
};
const statusSixLineWordComplete = (six_row_letter,word) => {
  var statusSixRow = [];
  for (var i = 0; i < 5; i++) {
    if (word[i] == stringfyRow(six_row_letter)[i]) {
      statusSixRow.push(type.green);
    } else {
      statusSixRow.push(type.default);
    }
  }
  for (var i = 0; i < statusSixRow.length; i++) {
    if (statusSixRow[i] == type.default) {
      if (word.includes(stringfyRow(six_row_letter)[i])) {
        statusSixRow[i] = type.yellow;
      } else {
        statusSixRow[i] = type.red;
      }
    }
  }
  return statusSixRow;
};


export { statusFirstLine, statusSecondLine, statusThreeLine, statusFourLine,statusFiveLine,statusSixLine };
