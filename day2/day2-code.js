const { readFileSync } = require("node:fs");
const filePath = "./day2/input.txt";

const day2Function = () => {
  const fileString = readFileSync(filePath, "utf8");
  const lineArray = fileString.split("\n");

  console.log(lineArray);

  return "hello world";
};

module.exports = {
  day2Function,
};
