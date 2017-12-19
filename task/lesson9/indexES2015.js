/*
*  Same task from lesson3
*  but with OOP in ES5 and ES2015
* */

// ES6

module.exports = function () {

  class Calc {
    constructor(number) {
      this.a = number;
    }

    sum(dataArr) {
      let res = this.a;
      for (let i = 0; i < dataArr.length; i += 1) {
        res += +dataArr[i];
      }
      return res;
    }

    dif(dataArr) {
      const l = dataArr.length;
      let res = this.a;
      for (let i = 0; i < l; i += 1) {
        res -= +dataArr[i];
      }
      return res;
    }

    div(dataArr) {
      const l = dataArr.length;
      let res = this.a;
      for (let i = 0; i < l; i += 1) {
        res /= +dataArr[i];
        if (dataArr[i] === 0) {
          throw new InnerError('Can`t divide on zero');
        }
      }
      return Math.floor(res);
    }

    mul(dataArr) {
      const l = dataArr.length;
      let res = this.a;
      for (let i = 0; i < l; i += 1) {
        res *= +dataArr[i];
      }
      return res;
    }
  }

  class SqrtCalc extends Calc {
    constructor(number) {
      super(number);
    }

    sum(dataArr) {
      return super.sum(dataArr) ** 2;
    }

    dif(dataArr) {
      return super.dif(dataArr) ** 2;
    }

    div(dataArr) {
      return super.div(dataArr) ** 2;
    }

    mul(dataArr) {
      return super.mul(dataArr) ** 2;
    }
  }

  return {
    Calc,
    SqrtCalc
  }
};

