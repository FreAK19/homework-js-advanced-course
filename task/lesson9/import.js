// ES 5

const Calculator = require('./index')();

const num = new Calculator.Calc(5);
const sqrtNum = new Calculator.SqrCalc(100);
console.log(sqrtNum.sum([1, 2, 3])); // 11 236

//  ES6

const CalculatorES6 = require('./indexES2015')();
const num2 = new CalculatorES6.Calc(100);
const sqrtNum2 = new CalculatorES6.SqrtCalc(100);

console.log(sqrtNum2.sum([1, 2, 3]));