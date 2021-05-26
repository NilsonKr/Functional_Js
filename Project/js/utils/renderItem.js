import updateTotals from './getTotals.js';
import { itemsList } from '../main.js';
import { genRow, genTag, trashIcon } from '../lib/genTag.js';

const render = itemsList => {
	const mount = document.querySelector('#mountNode');

	const rows = itemsList.map((item, index) => {
		const genDeleteBtn = genTag({
			name: 'button',
			attrs: { class: 'btn btn-outline-danger', 'data-index': index, id: 'deleteBtn' },
		})(trashIcon);

		return genRow([
			item.description,
			item.calories,
			item.carbs,
			item.proteins,
			genDeleteBtn,
		]);
	});

	mount.innerHTML = rows.join('');
};

const deleteNode = index => {
	itemsList.splice(index, 1);

	render(itemsList);
	updateTotals(itemsList);
};

export { render, deleteNode };
