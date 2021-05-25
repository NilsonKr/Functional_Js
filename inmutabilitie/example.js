const myList = [
	{
		item: 'idk',
		quantity: 2,
	},
];

//Mutability
const addItem = (list, item, quantity) => {
	list.push({
		item,
		quantity,
	});

	return list;
};

//Inmutability With JSON trick

const addItemJSON = (list, item, quantity) => {
	const newList = JSON.parse(JSON.stringify(list));

	newList.push({
		item,
		quantity,
	});

	return newList;
};

//Inmutabilty with spread operator

const addItemSPREAD = (list, item, quantity) => {
	const newList = list.map(item => ({ ...item }));

	newList.push({
		item,
		quantity,
	});

	return newList;
};

const myNewList = addItemSPREAD(myList, 'Lays', 5);

myNewList[0].item = 'Candy';

console.log(myNewList); // 2 ITEMS And the one its candy **New List**

console.log(myList); // 1 Item and its 'idk' **dont change** respect the original
