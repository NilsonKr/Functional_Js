function composeFunctions(...functions) {
	return data => functions.reduceRight((prevValue, fn) => fn(prevValue), data);
}

export default composeFunctions;
