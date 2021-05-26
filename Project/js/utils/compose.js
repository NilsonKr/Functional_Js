function compose(...functions) {
	return data => functions.reduceRight((value, fn) => fn(value), data);
}

export default compose;
