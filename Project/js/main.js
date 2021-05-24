const compose =
	(...functions) =>
	data =>
		functions.reduceRight((value, func) => func(value), data);

const descriptionInput = document.querySelector('#description');
const caloriesInput = document.querySelector('#calories');
const carbsInput = document.querySelector('#carbs');
const proteinInput = document.querySelector('#proteins');

