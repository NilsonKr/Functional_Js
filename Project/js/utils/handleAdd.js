import { itemsList } from '../main.js';
import updateTotals from './getTotals.js';
import { render } from './renderItem.js';

const descriptionInput = document.querySelector('#description');
const caloriesInput = document.querySelector('#calories');
const carbsInput = document.querySelector('#carbs');
const proteinInput = document.querySelector('#proteins');

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
		addItem();
	}
}

const addItem = () => {
	const newItem = {
		description: descriptionInput.value,
		calories: parseInt(caloriesInput.value),
		carbs: parseInt(carbsInput.value),
		proteins: parseInt(proteinInput.value),
	};

	itemsList.push(newItem);
	cleanInputs();

	render(itemsList);
	updateTotals(itemsList);
};

const cleanInputs = () => {
	descriptionInput.value = '';
	carbsInput.value = '';
	caloriesInput.value = '';
	proteinInput.value = '';
};

export default handleAdd;
