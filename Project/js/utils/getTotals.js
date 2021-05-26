const calories = document.querySelector('#caloriesTotal');
const carbs = document.querySelector('#carbsTotal');
const proteins = document.querySelector('#proteinsTotal');

const updateTotals = list => {
	let caloriesT = 0;
	let carbsT = 0;
	let proteinsT = 0;

	list.map(item => {
		caloriesT += item.calories;
		carbsT += item.carbs;
		proteinsT += item.proteins;
	});

	calories.textContent = caloriesT;
	carbs.textContent = carbsT;
	proteins.textContent = proteinsT;
};

export default updateTotals;
