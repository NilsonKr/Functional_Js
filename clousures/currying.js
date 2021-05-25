function sums(a, b, c) {
	return a + b + c;
}

console.log(sums(1, 2, 3)); // 6

// With Currying

const multipleSums = a => {
	return b => {
		return c => {
			return a + b + c;
		};
	};
};

console.log(multipleSums(1)(2)(3)); // 6
