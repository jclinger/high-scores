import _, { findIndex } from "lodash";

const sortScores = (data: any, qtySorted: number) => {
	let obj2: any = {}
	let sortedData = data.map((obj:any) =>{
		// TODO try catch of a JSON parse Object[key]
		// if error skip that one, move onto next one
		try {
			console.log(obj, ": obj 11111");
			console.log(Object.values(obj), ": Object.values(obj) 22222");
			console.log(Object.values(obj)[0], ": Object.values(obj)[0] 3333");
	
			// let test123 = JSON.parse(Object.values(obj)[0]);
			console.log(Object.keys(obj), ": Object.keys(obj) 44444");
			console.log(Object.keys(obj)[0], ": Object.keys(obj)[0] 55555");
	
			const value: any = Object.values(obj)[0];
			const jsonVerifiedValue = JSON.parse(value);
			console.log(jsonVerifiedValue, ": 77777");
			const key = Object.keys(obj)[0]
			obj2[key] = jsonVerifiedValue;
	
			// console.log(Number(Object.keys(obj)), ": Number(Object.keys(obj))");
			// console.log(Object.keys(obj), ": Object.keys(obj)");
			return Number(Object.keys(obj))
		} catch {
			console.log(obj, ": obj rejected");
			// move on to next iteration
		}
	}).sort() //.map((key:any) => { return { "score": key, "id": obj2[key].id }}) 

	sortedData = sortedData.filter(( element: any ) => {
		return element !== undefined;
	});

	console.log(obj2, ": obj2");

	sortedData = sortedData.map((key:any) => { return { "score": key, "id": obj2[key].id }}) 

	// return only top N results
	const highScores = sortedData.slice(0, qtySorted)
	console.log(sortedData, ": sortedData");
	console.log(highScores, ": highScores");
	return highScores;
};

export {sortScores};