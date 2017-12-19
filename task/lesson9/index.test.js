const assert = require('chai').assert;
const Calculator = require('./index')();
const sqrtNum = new Calculator.SqrCalc(100);
const CalculatorES6 = require('./indexES2015')();
const sqrtNum2 = new CalculatorES6.SqrtCalc(100);

describe('Calc', () => {
  describe('Calc ES5', () => {
    describe('sum', () => {
      it('should return correct 11881', function () {
        assert.equal(sqrtNum.sum([1, 5, 3]), 11881);
      });
      it('should return correct 11236 and type should be number', function () {
        assert.equal(typeof sqrtNum.sum([1, '2', 3]), 'number');
        assert.equal(sqrtNum.sum([1, '2', 3]), 11236);
      });
      it('should return 10609', function () {
        assert.equal(sqrtNum.sum([1, '2', null]), 10609)
      });
    });
    describe('dif', () => {

      it('should return correct response', function () {
        assert.equal(sqrtNum.dif([10, 20]), 4900)
      });

      it('should return correct 4900 and type should be number', function () {
        assert.equal(typeof sqrtNum.dif([10, '20']), 'number');
        assert.equal(sqrtNum.dif([10, '20']), 4900);
      });

      it('should return 4900', function () {
        assert.equal(sqrtNum.dif([10, '20', null]), 4900)
      });
    });
    describe('mul', () => {
      it('should return 160000', function () {
        assert.equal(sqrtNum.mul([2, 2]), 160000)
      });
      it('should return 160000 with coercion to number', function () {
        assert.equal(sqrtNum.mul([2, '2']), 160000)
      });
    });
    describe('div', () => {
      it('should return 625', function () {
        assert.equal(sqrtNum.div([2, 2]), 625)
      });
      it('should return correct 625 and type should be number', function () {
        assert.equal(typeof sqrtNum.div([2, '2']), 'number');
        assert.equal(sqrtNum.div([2, '2']), 625);
      });
      it('should return Infinity', function () {
        assert.equal(sqrtNum.div([2, '2', null]), 'Infinity', 'null to Number type will be 0, divide on zero return Infinity')
      });
    });
  });
  describe('Calc ES6', () => {
    describe('sum', () => {
      it('should return correct 11881', function () {
        assert.equal(sqrtNum2.sum([1, 5, 3]), 11881);
      });
      it('should return correct 11236 and type should be number', function () {
        assert.equal(typeof sqrtNum2.sum([1, '2', 3]), 'number');
        assert.equal(sqrtNum2.sum([1, '2', 3]), 11236);
      });
      it('should return 10609', function () {
        assert.equal(sqrtNum2.sum([1, '2', null]), 10609)
      });
    });
    describe('dif', () => {
      it('should return correct response', function () {
        assert.equal(sqrtNum2.dif([10, 20]), 4900)
      });

      it('should return correct 4900 and type should be number', function () {
        assert.equal(typeof sqrtNum2.dif([10, '20']), 'number');
        assert.equal(sqrtNum2.dif([10, '20']), 4900);
      });

      it('should return 4900', function () {
        assert.equal(sqrtNum2.dif([10, '20', null]), 4900)
      });
    });
    describe('mul', () => {
      it('should return 160000', function () {
        assert.equal(sqrtNum2.mul([2, 2]), 160000)
      });
      it('should return 160000 with coercion to number', function () {
        assert.equal(sqrtNum2.mul([2, '2']), 160000)
      });
    });
    describe('div', () => {
      it('should return 625', function () {
        assert.equal(sqrtNum2.div([2, 2]), 625)
      });
      it('should return correct 625 and type should be number', function () {
        assert.equal(typeof sqrtNum2.div([2, '2']), 'number');
        assert.equal(sqrtNum2.div([2, '2']), 625);
      });
      it('should return Infinity', function () {
        assert.equal(sqrtNum2.div([2, '2', null]), 'Infinity', 'null to Number type will be 0, divide on zero return Infinity')
      });
    });
  });
});