//Compose Functions

const getAttr = (attrObj = {}) => {
	const attributes = [];

	for (const attr in attrObj) {
		attributes.push(` ${attr}="${attrObj[attr]}" `);
	}

	return attributes.join(' ');
};

const genTag = tag => content =>
	`<${tag.name} ${getAttr(tag.attrs)} >${content}</${tag.name}>`;

export default genTag;
