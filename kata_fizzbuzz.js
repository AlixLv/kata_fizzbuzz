function createSeriesNumber(maxNumber) {
	let arrayOfNumber = [];
	let count = 1;
	while (arrayOfNumber.length < maxNumber) {
		arrayOfNumber.push(count);
		count++;
	}
	console.log(arrayOfNumber);
	isFizzBuzz(arrayOfNumber);
	return arrayOfNumber;
}

function isFizzBuzz(seriesNumber) {
	for (let i = 0; i < seriesNumber.length; i++) {
		if (seriesNumber[i] % 3 == 0 && seriesNumber[i] % 5 == 0) {
			console.log(seriesNumber[i], "FizzBuzz !");
		} else if (seriesNumber[i] % 3 == 0) {
			console.log(seriesNumber[i], "Fizz !");
		} else if (seriesNumber[i] % 5 == 0) {
			console.log(seriesNumber[i], "Buzz !");
		} else {
			console.log(seriesNumber[i]);
		}
	}
}

// let seriesNumber = createSeriesNumber(100);

// ------------------- VERSION AVEC PARAMETRES MODIFIABLES ------------------------

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

function isFizzBuzz(numberToOperate, moduloOne, moduloTwo) {
	if (numberToOperate % moduloOne === 0 && numberToOperate % moduloTwo === 0) {
		console.log(numberToOperate, "FizzBuzz !");
	} else {
		return;
	}
}

function isFizz(numberToOperate, modulo) {
	if (numberToOperate % modulo === 0) {
		console.log(numberToOperate, "Fizz !");
	} else {
		return;
	}
}

function isBuzz(numberToOperate, modulo) {
	if (numberToOperate % modulo === 0) {
		console.log(numberToOperate, "Buzz !");
	} else {
		return;
	}
}

function isNotFizzBuzz(numberToOperate, moduloOne, moduloTwo) {
	if (numberToOperate % moduloOne != 0 && numberToOperate % moduloTwo != 0) {
		console.log(numberToOperate);
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

let seriesNumber = createSeriesNumber(100);
