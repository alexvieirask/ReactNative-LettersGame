import words from "./words";
const randomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};
const lineLenghtMax = (line) =>{
  return line.length == 5;
}
const stringfyRow = (lista_letters) => {
    return `${lista_letters[0]}${lista_letters[1]}${lista_letters[2]}${lista_letters[3]}${lista_letters[4]}`;
};
const allRowsStringfy = (rows) => {
  return [stringfyRow(rows[0]),stringfyRow(rows[1]),stringfyRow(rows[2]),stringfyRow(rows[3]),stringfyRow(rows[4]),stringfyRow(rows[5])]
};
export {stringfyRow, allRowsStringfy,randomWord,lineLenghtMax}