const test = require("node:test");
const assert = require("node:assert");
const {
	isFizzBuzz,
	isFizz,
	isBuzz,
	isNotFizzBuzz,
} = require("./kata_fizzbuzz");

test("isFizzBuzz(15, 3, 5)", (t) => {
	assert.strictEqual(isFizzBuzz(15, 3, 5), "FizzBuzz !");
});

test("isFizz(9, 3)", (t) => {
	assert.strictEqual(isFizz(9, 3), "Fizz !");
});

test("isBuzz(10, 5)", (t) => {
	assert.strictEqual(isBuzz(10, 5), "Buzz !");
});

test("isNotFizzBuzz(13, 3, 5)", (t) => {
	assert.strictEqual(isNotFizzBuzz(13, 3, 5), 13);
});
