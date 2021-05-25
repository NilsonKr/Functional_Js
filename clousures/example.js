const buildSum = num => {
	return num2 => num + num2; //Clousure
};

const addFive = buildSum(5);

console.log(addFive(5)); //10
