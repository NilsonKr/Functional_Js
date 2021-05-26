import composeFunctions from '../utils/compose.js';

// const valuesList = ['Apple', '8', '10', '2', 'removeBtn'];

/*********
Object Example for genTag()

const exampleObj = {
	name: 'h1',
	attrs: {
		class: 'setColor setHeight',
		id: 'mainTitle',
	},
};

*********/

const setAttributes = (attrs = {}) => {
	const newAttrs = [];

	for (const attribute in attrs) {
		newAttrs.push(`${attribute}="${attrs[attribute]}"`);
	}

	return newAttrs.join('');
};

const genTag = tagObj => content =>
	`<${tagObj.name} ${setAttributes(tagObj.attrs)} >${content}</${tagObj.name}>`;

// Gen Table Rows and Cells
const buildCell = genTag({ name: 'td' });
const genCells = values => values.map(buildCell).join('');

const buildRow = genTag({ name: 'tr' });

// First build the cells according to the items passed and then generate a row with the cells built
const fillRow = values => composeFunctions(buildRow, genCells)(values);

export default genTag;
