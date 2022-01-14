import { sortScores } from "./sortScores";
import fs from "fs";
const userarguments = process.argv.slice(2);
const filepath = userarguments[0];
const quantity = userarguments[1];

const filedata = fs.readFileSync(filepath);
const qtyToSort = parseInt(quantity);

const tempArray = filedata.toString().split("},");

// cleans up data, removes "[\r\n etc."
const updatedArray = tempArray.map(e => {
  return "{" + e.split(/{(.+)/)[1] + "}"
})

// only sort based on N items
const nData = updatedArray.slice(0, qtyToSort);
// sorts based on the high scores
const result = sortScores(nData);

if(result) { console.log(result)};