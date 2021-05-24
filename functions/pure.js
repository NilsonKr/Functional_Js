//Pure Functions

const double = num => num * 2;

const greaterThan = (value, comparision) => value > comparision;

double(2); //2
greaterThan(2, 5); // false
greaterThan(5, 2); // true

//No pure Functions

const getTime = () => new Date().toLocaleTimeString();

for (let i = 0; i < 3; i++) {
	setTimeout(() => {
		console.log(getTime());
	}, 1000 * i);
}
/* Not Predictable */

// 11:00:03 PM
// 11:00:04 PM
// 11:00:05 PM
