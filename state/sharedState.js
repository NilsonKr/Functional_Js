const state = {
	value: 2,
};

const addTwo = () => (state.value += 2);

const double = () => (state.value *= 2);

double();
addTwo();

console.log(state.value); // 6

addTwo();
double();

console.log(state.value); // 8

// Inmutabilitie

const state = {
	value: 2,
};

const addTwo = data => Object.assign({}, data, { value: data.value + 2 });

const double = data => Object.assign({}, data, { value: data.value * 2 });

addTwo(state);
double(state);

console.log(double(addTwo(state))); // 8

console.log(state.value); // 2
