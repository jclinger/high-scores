import data from "./scores.json";
import { sortScores } from "./sortScores";

console.log(data, ": this is another test script!!!");
console.log(data.length, ": data length");

const result = sortScores(data, data.length);

console.log(result, ": Sorted Scores result");