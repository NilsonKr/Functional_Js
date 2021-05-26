import genRow from '../lib/genTag.js';

const render = itemsList => {
	const mount = document.querySelector('#mountNode');

	const rows = itemsList.map(item =>
		genRow([item.description, item.calories, item.carbs, item.proteins])
	);

	mount.innerHTML = rows.join('');
};

export default render;
