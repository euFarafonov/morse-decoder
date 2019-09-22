const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  let newStr = "";

  for (let i = 0; i < expr.length / 10; i++) {
    let current = expr.substr(i * 10, 10);
    let symb = "";

    if (current[0] == "*") {
      newStr += " ";
      continue;
    }

    for (let j = 0; j < 10; j += 2) {
      if (current[j] == "0") {
        continue;
      } else {
        symb += current[j + 1] == "0" ? "." : "-";
      }
    }

    for (var prop in MORSE_TABLE) {
      if (prop == symb) {
        newStr += MORSE_TABLE[prop];
      }
    }
  }

  return newStr;
}

module.exports = {
  decode
};
