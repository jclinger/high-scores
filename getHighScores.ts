import * as data from "./scores.json";
import { sortScores } from "./sortScores";

console.log(data, ": this is another test script!!!");
const result = sortScores(data);

console.log(result, ": result");