function InnerError(message) {
  this.message = message;
  this.name = 'InnerError';
}

InnerError.prototype = Object.create(Error.prototype);

//  Task 1
function isAllTrue(arr, filterFn) {
  const l = arr.length;
  let result = false;
  if (!l) {
    throw new InnerError('First argument should be not empty array');
  }
  for (let i = 0; i < l; i += 1) {
    const res = filterFn(arr[i]);
    if (res) {
      result = true;
    } else if (res === false) {
      result = false;
      break;
    }
  }
  return result;
}

//  Task 2
function isSomeTrue(arr, filterFn) {
  const l = arr.length;
  let result = false;
  if (!l) {
    throw new InnerError('First argument should be not empty array');
  }
  for (let i = 0; i < l; i += 1) {
    const res = filterFn(arr[i]);
    if (res) {
      result = true;
      break;
    }
  }
  return result;
}

//  Task 3
function calculator(firstNumber = 1) {
  if (typeof firstNumber !== 'number') {
    throw new InnerError('First argument should number type');
  }
  return {
    sum(number) {
      let res = firstNumber;
      for (let i = 0; i < number.length; i += 1) {
        res += number[i];
      }
      return res;
    },
    dif(number) {
      const l = number.length;
      let res = firstNumber;
      for (let i = 0; i < l; i += 1) {
        res -= number[i];
      }
      return res;
    },
    div(number) {
      const l = number.length;
      let res = firstNumber;
      for (let i = 0; i < l; i += 1) {
        res /= number[i];
        if (number[i] === 0) {
          throw new InnerError('Can`t divide on zero');
        }
      }
      return Math.floor(res);
    },
    mul(number) {
      const l = number.length;
      let res = firstNumber;
      for (let i = 0; i < l; i += 1) {
        res *= number[i];
      }
      return res;
    },

  };
}

try {
  const y = calculator(400);
  console.log(y.sum([5, 35]));
  console.log(y.dif([5, 35]));
  console.log(y.div([10]));
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}

try {
  console.log(isAllTrue([45, 3, 'g', 2, 1], e => typeof e === 'number'));
  console.log(isSomeTrue([45, 3, 2, 1, 'f'], e => typeof e === 'number'));
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}
module.exports = calculator;
