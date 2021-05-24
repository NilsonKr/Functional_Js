//Copy objects with Object.assign

const person = {
	name: 'Nilson',
	age: 27,
};

const person2 = Object.assign({}, person);

console.log(person, person2); //Same Object

person2.name = 'Nayeonnie';

console.log(person, person2); //Diferent Object

/*****************EXCEPTION******************/

const person = {
	name: 'Nilson',
	age: 27,
	country: {
		name: 'Colombia',
	},
};

const person2 = Object.assign({}, person);

console.log(person, person2); //Same Object

person2.country.name = 'Korea';

console.log(person, person2); //Both Change\

//***Object.assing only copy in 1 level

//Copy Objects with JSON.parse() and JSON.stringify()

const person = {
	name: 'Nilson',
	age: 27,
	country: {
		name: 'Colombia',
	},
};

const person2 = JSON.parse(JSON.stringify(person));

console.log(person, person2); //Same Object

person2.country.name = 'Brazil';

console.log(person, person2); //Differen Object

//***No matter how many levels the object has Always will be different pointer
