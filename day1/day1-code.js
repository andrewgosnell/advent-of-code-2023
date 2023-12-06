const { readFileSync } = require("node:fs");
const filePath = "./day1/input.txt";
const { searchList1, searchList2 } = require("./searchLists");

let searchList;

const day1Function = (part) => {
  const fileString = readFileSync(filePath, "utf8");
  const lineArray = fileString.split("\n");
  searchList = part === 1 ? searchList1 : searchList2;

  const searchedArray = lineArray.map(transformLines);
  const sum = searchedArray.reduce((sum, value) => sum + value);
  return sum;
};

const transformLines = (line) => {
  if (!line) {
    return 0;
  }

  let first = 100;
  let last = -1;
  let test, firstKey, lastKey;

  for (const [key, value] of Object.entries(searchList)) {
    test = line.indexOf(key);
    if (test < first && test !== -1) {
      firstKey = key;
      first = test;
    }

    test = line.lastIndexOf(key);
    if (test > last) {
      lastKey = key;
      last = test;
    }
  }

  return parseInt(`${searchList[firstKey]}${searchList[lastKey]}`);
};

module.exports = {
  day1Function,
};
