const { readFileSync } = require("node:fs");
const filePath = "./day3/input.txt";

const day3Function = () => {
  const fileString = readFileSync(filePath, "utf8");
  const lineArray = fileString.split("\n");

  console.log(lineArray);
  /*
  const filtered = lineArray.map(transformLines);
  const sum = filtered.reduce((sum, value) => sum + value);
  */

  return 0;
};

module.exports = {
  day3Function,
};
