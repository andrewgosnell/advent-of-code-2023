const { readFileSync } = require("node:fs");
const filePath = "./day2/input.txt";

const day2Function = () => {
  const fileString = readFileSync(filePath, "utf8");
  const lineArray = fileString.split("\n");

  const filtered = lineArray.map(transformLines);
  const sum = filtered.reduce((sum, value) => sum + value);

  return sum;
};

const transformLines = (line) => {
  const splitGame = line.split(": ");
  const cubes = splitGame[1]
    .replaceAll(";", ",")
    .replaceAll(", ", ",")
    .split(",");

  for (str of cubes) {
    const values = str.split(" ");
    if (values[0] > 12 && values[1] === "red") {
      return 0;
    }
    if (values[0] > 13 && values[1] === "green") {
      return 0;
    }
    if (values[0] > 14 && values[1] === "blue") {
      return 0;
    }
  }

  const splitNumber = splitGame[0].replaceAll(" ", ":").split(":");
  const gameNumber = Number.parseInt(splitNumber[1]);
  console.log(gameNumber);
  console.log(cubes);
  return gameNumber;
};

const day2Function2 = () => {
  const fileString = readFileSync(filePath, "utf8");
  const lineArray = fileString.split("\n");

  const filtered = lineArray.map(transformLines2);
  const sum = filtered.reduce((sum, value) => sum + value);

  return sum;
};

const transformLines2 = (line) => {
  let game = { red: 0, green: 0, blue: 0 };

  const splitGame = line.split(": ");
  const cubes = splitGame[1]
    .replaceAll(";", ",")
    .replaceAll(", ", ",")
    .split(",");

  for (str of cubes) {
    const values = str.split(" ");
    const number = Number.parseInt(values[0]);
    const color = values[1];

    if (number > game[color]) {
      game[color] = number;
    }
  }

  const power = game["red"] * game["green"] * game["blue"];
  return power;
};

module.exports = {
  day2Function,
  day2Function2,
};
