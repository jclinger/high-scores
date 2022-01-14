const sortScores = (data: any) => {
	let obj2: any = {}
	const idTracker: any = [];

	try {
		// catch error in case not a JSON
		let jsonData = data.map((element: string) => {
			return JSON.parse(element);
		});

		// break out Keys with JSON data, and sort
		let sortedData = jsonData.map((obj:any) =>{
				const value: any = Object.values(obj)[0];
				const key = Object.keys(obj)[0]
				const numberKey = Number(Object.keys(obj));

				// Verifies id is at root level
				// ids are unique
				// score is positive
				if(
					value.id &&
					numberKey > 0 &&
					idTracker.findIndex((x:any) => x === value.id) === -1
				) {
					idTracker.push(value.id);
					obj2[key] = value;
	
					return numberKey;
				} else {
					throw Error;
				}
		}).sort();
		
		const formatSorted: any = [];

		sortedData.map((key:any) => {
			// Avoids duplicate score entries, takes latest one found in original data
			if(formatSorted.findIndex((x:any) => x.score === key) === -1) {
				formatSorted.push({ "score": key, "id": obj2[key].id });
			}
		});

		return formatSorted;
	} catch {
		console.error("ERROR: invalid json format No JSON object could be decoded - THIS IS NOT JSON")
	}
};

export {sortScores};