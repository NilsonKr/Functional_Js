function composeFunctions(...functions) {
	debugger;
	return data => functions.reduceRight((prevValue, fn) => fn(prevValue), data);
}

export default composeFunctions;
