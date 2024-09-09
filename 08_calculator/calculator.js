const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0)
};

const multiply = function (arr) {
  return arr.reduce((prev, next) => prev * next, 1)
};

const power = function (num, power) {
  return Math.pow(num, power)
};

const factorial = function (n) {
  if (n === 0) return 1;
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result *= i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
