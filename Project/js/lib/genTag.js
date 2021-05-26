import compose from '../utils/compose.js';

//Compose Functions

const itemsList = ['hey', 'happy', 'hacking!'];

const getAttr = (attrObj = {}) => {
	const attributes = [];

	for (const attr in attrObj) {
		attributes.push(` ${attr}="${attrObj[attr]}" `);
	}

	return attributes.join(' ');
};

const genTag = tag => content =>
	`<${tag.name} ${getAttr(tag.attrs)} >${content}</${tag.name}>`;

//Generate Rows And Cells
const buildRow = genTag({ name: 'tr' });
const buildCell = genTag({ name: 'td' });

const genTableCells = items => items.map(buildCell).join('');

const genTableRows = compose(buildRow, genTableCells);

console.log(genTableRows(itemsList));

export default genTag;
