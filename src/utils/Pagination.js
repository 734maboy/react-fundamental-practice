export const getPagesCount = (totalEntries, limit) => {
	return Math.ceil(totalEntries / limit);
}

export const getPagesArray = (totalPages) => {
	let resultArray = [];
	for (let i = 0; i < totalPages; i++) {
		resultArray.push(i + 1);
	}

	return resultArray;
}
