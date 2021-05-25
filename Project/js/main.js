const compose =
	(...functions) =>
	data =>
		functions.reduceRight((value, func) => func(value), data);

//Nodes
const descriptionInput = document.querySelector('#description');
const caloriesInput = document.querySelector('#calories');
const carbsInput = document.querySelector('#carbs');
const proteinInput = document.querySelector('#proteins');
const submitBtn = document.querySelector('#submit');

//Events
submitBtn.addEventListener('click', handleAdd);

document.body.addEventListener('keydown', ev => {
	const inputsId = ['description', 'calories', 'carbs', 'proteins'];
	const target = ev.target;

	if (inputsId.includes(target.id) && target.classList.contains('is-invalid')) {
		target.classList.remove('is-invalid');
	}
});

//Validation Handle

function handleAdd() {
	!descriptionInput.value ? descriptionInput.classList.add('is-invalid') : '';
	!caloriesInput.value ? caloriesInput.classList.add('is-invalid') : '';
	!carbsInput.value ? carbsInput.classList.add('is-invalid') : '';
	!proteinInput.value ? proteinInput.classList.add('is-invalid') : '';

	if (
		descriptionInput.value &&
		carbsInput.value &&
		caloriesInput.value &&
		proteinInput.value
	) {
		console.log('Ok!');
	}
}
