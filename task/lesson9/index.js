/*
*  Same task from lesson3
*  but with OOP in ES5 and ES2015
* */

//  ES5

module.exports = function () {

  const Calc = function (number) {
    if (typeof number !== 'number') {
      throw new Error('Argument should be a number');
    }
    this.a = number;
  };

  Calc.prototype.sum = function (dataArr) {
    if (Array.isArray(dataArr)) {
      let res = this.a;
      for (let i = 0; i < dataArr.length; i += 1) {
        res += +dataArr[i];
      }
      return res;
    }
    return false;
  };
  Calc.prototype.dif = function (dataArr) {
    let res = this.a;
    for (let i = 0; i < dataArr.length; i += 1) {
      res -= +dataArr[i];
    }
    return res;
  };
  Calc.prototype.div = function (dataArr) {
    const l = dataArr.length;
    let res = this.a;
    for (let i = 0; i < l; i += 1) {
      res /= +dataArr[i];
      if (dataArr[i] === 0) {
        throw new InnerError('Can`t divide on zero');
      }
    }
    return Math.floor(res);
  };
  Calc.prototype.mul = function (dataArr) {
    const l = dataArr.length;
    let res = this.a;
    for (let i = 0; i < l; i += 1) {
      res *= +dataArr[i];
    }
    return res;
  };

  const SqrCalc = function (number) {
    if (typeof number !== 'number') {
      throw new Error('Argument should be a number');
    }
    Calc.call(this, number);
  };
  // inherit from Calc

  SqrCalc.prototype = Object.create(Calc.prototype);
  SqrCalc.prototype.constructor = SqrCalc;

  // methods

  SqrCalc.prototype.sum = function (dataArr) {
    return Math.pow(Calc.prototype.sum.call(this, dataArr), 2);
  };
  SqrCalc.prototype.dif = function (dataArr) {
    return Math.pow(Calc.prototype.dif.call(this, dataArr), 2);
  };
  SqrCalc.prototype.div = function (dataArr) {
    return Math.pow(Calc.prototype.div.call(this, dataArr), 2);
  };
  SqrCalc.prototype.mul = function (dataArr) {
    return Math.pow(Calc.prototype.mul.call(this, dataArr), 2);
  };

  return {
    Calc,
    SqrCalc
  }
};


