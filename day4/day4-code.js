const { readFileSync } = require("node:fs");
const filePath = "./day4/input.txt";
//const filePath = "./day4/test.txt";

const day4Function = () => {
  const fileString = readFileSync(filePath, "utf8");
  const lineArray = fileString.split("\n").map(calculateLine);

  return lineArray.reduce((sum, value) => sum + value);
};

const calculateLine = (line, index, arr) => {
  const dropBeginning = line.split(": ");
  const fullCard = dropBeginning[1].trim().replaceAll("  ", " ").split(" | ");

  const winners = fullCard[0].split(" ");
  const myCard = fullCard[1].split(" ");

  const wins = myCard.filter((number) => winners.includes(number));
  const value = wins.length > 0 ? 2 ** (wins.length - 1) : 0;

  return value;
};

module.exports = {
  day4Function,
};
