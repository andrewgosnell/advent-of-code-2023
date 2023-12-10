const { readFileSync } = require("node:fs");
const { type } = require("node:os");
const filePath = "./day3/input.txt";
//const filePath = "./day3/test.txt";

const day3Function = () => {
  const fileString = readFileSync(filePath, "utf8");
  const lineArray = fileString.split("\n");

  const regex = new RegExp("\\d+", "g");

  let output = 0;

  const getValues = (match) => {
    output = {
      value: match[0],
      length: match[0].toString().length,
      start: match.index - 1,
      end: match.index + match[0].toString().length + 1,
    };
    return output;
  };

  const something = (line, idx, arr) => {
    const matches = [...line.matchAll(regex)];
    const newMatches = matches.map(getValues);
    let lineSum = 0;

    newMatches.forEach((match) => {
      const beg = match.start < 0 ? 0 : match.start;
      const end = match.end;

      const first = idx > 0 ? idx - 1 : 0;
      const second = idx;
      const third = idx < arr.length - 1 ? idx + 1 : idx;

      const checkString =
        arr[first].slice(beg, end) +
        arr[second].slice(beg, end) +
        arr[third].slice(beg, end);

      const shouldAddIt = [...checkString.matchAll(/[^.0-9]/g)];
      lineSum += shouldAddIt[0]?.[0] ? parseInt(match.value) : 0;
    });
    return lineSum;
  };

  const lineValues = lineArray.map(something);

  return lineValues.reduce((sum, value) => sum + value);
};

module.exports = {
  day3Function,
};
