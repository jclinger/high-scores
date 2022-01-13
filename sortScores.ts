import _ from "lodash";

function GetSortOrder(prop: any) {    
	return function(a: any, b: any) {    
		if (a[prop] > b[prop]) {    
			return 1;    
		} else if (a[prop] < b[prop]) {    
			return -1;    
		}    
		return 0;    
	}    
}  

function sortByKey(jsObj: any){
	var sortedArray = [];

	// Push each JSON Object entry in array by [key, value]
	for(var i in jsObj)
	{
		sortedArray.push([i, jsObj[i]]);
	}

  // Run native sort function and returns sorted array.
	return sortedArray.sort();
}

/////////////////////

const jsonToSortedArray:any = (json: any) => {
    let ordered = [];
    for (let i in json) {
        let value;
        if (json[i] instanceof Object) {
            value = jsonToSortedArray(json[i]);
        } else {
            value = json[i];
        }
        ordered.push([i, value]);
    }
    return ordered.sort();
}

function arrayToStringJson(ordered: any) {
    let result = '{'
    for (let i = 0; i < ordered.length; i++) {
        const key = '"' + ordered[i][0] + '"';
        let value;
        if (ordered[i][1] instanceof Array) {
            value = ':' + arrayToStringJson(ordered[i][1]) + ',';
        } else {
            value = ':"' + ordered[i][1] + '",';
        }
        result += key + value;
    }
    result = result.substring(0, result.length - 1);
    return result + '}';
}


const sortScores = (data: any, count: number) => {
	console.log(data, ": data inner");
	console.log(count, ": count");


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

	const array:any = [];

	for (const key in data) {
		array.push(data[key]);
	}

	console.log(array, ": array");

  	// sortedData.sort((a: any, b: any) => {

  	// 		return b - a;
	  // });



  	// console.log(sortedData, ": sortedData");



	return true;
};

export {sortScores};