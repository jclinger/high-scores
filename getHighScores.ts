// import data from "./scores.json";
import { sortScores } from "./sortScores";
import fs from "fs";
const userarguments = process.argv.slice(2);
const filepath = userarguments[0];
const quantity = userarguments[1];

// TODO validate that there is an actual argument
const filedata = fs.readFileSync(filepath);
const qtySorted = parseInt(quantity);
const data = JSON.parse(filedata.toString());
console.log(data, ": filedata");
console.log(qtySorted, ": qtySorted");

const result = sortScores(data, qtySorted);

console.log(result, ": Sorted Scores result");