import _, { findIndex } from "lodash";

const sortScores = (data: any, count: number) => {
	// console.log(data, ": data inner");
	// console.log(count, ": count");
	// json.parse(data) // go from original format to json
	////////////////////////////////////////////////

	// const sortedData = _.cloneDeep(data);
	// const sortedData0 = data.sort();
	// const sortedData = sortByKey(data);

	// console.log(sortedData0, ": sortedData0 -- 35");
  	// console.log(sortedData, ": sortedData -- 36");

	// const array = Object.keys(data).map(key => data[key]);
	// console.log(array, ": array");
	
	// let ordered = jsonToSortedArray(data);
    // let result = arrayToStringJson(ordered);

	// console.log(ordered, ": ordered");
	// console.log(result, ": result");

	// const array:any = [];

	// for (const key in data) {
	// 	console.log(key, ": key");
	// 	console.log(data[key], ": data[key]");
	// 	array.push(data[key]);
	// }

	// const array = Object.keys(data).map(key => data[key]["10622876"]);
	// const array = Object.keys(data).map(key => data[key]);
	// const array:any = [];

	// for(const [key,value] of Object.entries(data)) {
	// 	console.log(value, "testing");
	// }

	// const tmp2 = data.map((obj: any) => Number(Object.keys(obj))).sort();

	let obj2: any = {}
	const tmp2 = data.map((obj:any) =>{
		// TODO try catch of a JSON parse Object[key]
		// if error skip that one, move onto next one
		const value: any = Object.values(obj)[0];
		const key = Object.keys(obj)[0]
		obj2[key] = value;
		return Number(Object.keys(obj))
	}).sort().map((key:any) => { return { "score": key, "id": obj2[key].id }}) 

	console.log(tmp2, ": tmp2");
	const args = process.argv.slice(2);

	console.log(args, ": args");

	// let test1 = data.forEach((item:any) => {
	// 	console.log(item, ": item");
	// 	var jsonObj = JSON.parse(item);
	// 	console.log(jsonObj, ": jsonObj");
	// 	// console.log(item[0], ": item.child");
	// 	// console.log(findIndex(item), ": findIndex(item");
	// 	array.push(findIndex(item));
	// }) 



	// console.log(array, ": array");

	// for(let key in data) { array.push(data[key])}

	// let test123 = array.find((x:any) => x.key === "10622876")
	// console.log(test123, ": test123");

  	// sortedData.sort((a: any, b: any) => {

  	// 		return b - a;
	  // });



  	// console.log(sortedData, ": sortedData");



	return true;
};

export {sortScores};