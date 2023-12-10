const { readFileSync } = require("node:fs");
//const filePath = "./day3/input.txt";
const filePath = "./day3/test.txt";

const day4Function = () => {
  const fileString = readFileSync(filePath, "utf8");
  const lineArray = fileString.split("\n");

  return "hello world";
};

module.exports = {
  day4Function,
};
