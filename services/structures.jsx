const type = {
  focus: "focus",
  default: "default",
  green: "green",
  yellow: "yellow",
  red: "red"
}
const styles_square = { 
  focus: {
    background: "#1a1a1a",
    border: "#FFF",
  },
  default: {
    background: "#1a1a1a",
    border: "#3b3b3b",
  },
  yellow: {
    background: "#ffb026",
    border: "#ffb026",
  },
  green: {
    background: "#22a800",
    border: "#22a800",
  },
  red: {
    background: "#b6bfb4",
    border: "#b6bfb4",
  }
}
const default_row = {
  letters: [],
  word_complete: false,
}
const example_row = {
  word :["A", "R", "T", "E", "S"],
  status : ["green", "yellow", "yellow", "red", "green"]
}
const graphic = {
  victory:{
    label: "Vitórias",
    color: "#00b509",
  },
  defeat:{
    label: "Derrotas",
    color: "#fc2c03",
  }

} 

export { type, styles_square, default_row, example_row, graphic } 
    