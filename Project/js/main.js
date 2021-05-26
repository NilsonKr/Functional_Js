import handleAdd from './utils/handleAdd.js';
import { deleteNode } from './utils/renderItem.js';

export const itemsList = [];

//Nodes
const submitBtn = document.querySelector('#submit');

//Events
submitBtn.addEventListener('click', handleAdd);

document.body.addEventListener('click', ev => {
	const target = ev.target;

	if (target.id === 'deleteBtn') {
		deleteNode(target.dataset.index);
	}
});

document.body.addEventListener('keydown', ev => {
	const inputsId = ['description', 'calories', 'carbs', 'proteins'];
	const target = ev.target;

	if (inputsId.includes(target.id) && target.classList.contains('is-invalid')) {
		target.classList.remove('is-invalid');
	}
});

// console.log(
// 	genTag({
// 		name: 'h1',
// 		attrs: {
// 			class: 'mx-3 flx-h',
// 			id: 'Hello',
// 		},
// 	})('Hello World!')
// );
