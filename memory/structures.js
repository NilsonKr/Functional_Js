//Save in STACK by value

let a = 'Hello';
let b = a;

console.log(a, b); //Hello Hello

b = 'World';

console.log(a, b); // Hello World

//Save in HEAP by pointer

let country = {
	name: 'Colombia',
	food: 'empanada',
};

let country2 = country;

console.log(country, country2); //Same Object

country2.name = 'Korea';

console.log(country, country2); //Both with the change
