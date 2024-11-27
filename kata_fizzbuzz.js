function isFizzBuzz(numberToOperate, moduloOne, moduloTwo) {
	if (numberToOperate % moduloOne === 0 && numberToOperate % moduloTwo === 0) {
		console.log(numberToOperate, "FizzBuzz !");
		return "FizzBuzz !";
	} else {
		return;
	}
}

function isFizz(numberToOperate, modulo) {
	if (numberToOperate % modulo === 0) {
		console.log(numberToOperate, "Fizz !");
		return "Fizz !";
	} else {
		return;
	}
}

function isBuzz(numberToOperate, modulo) {
	if (numberToOperate % modulo === 0) {
		console.log(numberToOperate, "Buzz !");
		return "Buzz !";
	} else {
		return;
	}
}

function isNotFizzBuzz(numberToOperate, moduloOne, moduloTwo) {
	if (numberToOperate % moduloOne != 0 && numberToOperate % moduloTwo != 0) {
		console.log(numberToOperate);
		return numberToOperate;
	} else {
		return;
	}
}

function numberIsFizzBuzz(seriesNumber) {
	for (let i = 0; i < seriesNumber.length; i++) {
		if (isFizzBuzz(seriesNumber[i], 3, 5)) {
			return;
		} else if (isFizz(seriesNumber[i], 3)) {
			return;
		} else if (isBuzz(seriesNumber[i], 5)) {
			return;
		} else {
			isNotFizzBuzz(seriesNumber[i], 3, 5);
		}
	}
}

function createSeriesNumber(maxNumber) {
	let arrayOfNumber = [];
	let count = 1;
	while (arrayOfNumber.length < maxNumber) {
		arrayOfNumber.push(count);
		count++;
	}
	console.log(arrayOfNumber);
	numberIsFizzBuzz(arrayOfNumber);
	return arrayOfNumber;
}

let seriesNumber = createSeriesNumber(25);

module.exports = { isFizzBuzz, isFizz, isBuzz, isNotFizzBuzz };
