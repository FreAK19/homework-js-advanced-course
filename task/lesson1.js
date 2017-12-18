const App = (function () {
  return {
    notFound: -1,
    reverse(arr) {
      const result = [];
      for (let i = arr.length - 1; i >= 0; i -= 1) {
        result.push(arr[i]);
      }
      return result;
    },

    reverseArr(arr) {
      const link = arr;
      for (let i = arr.length - 1; i >= 0; i -= 1) {
        link.push(arr[i]);
        delete link[i];
      }
      return link;
    },

    indexOf(arr, element) {
      let res = false;
      for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === element) {
          res = i;
        }
      }
      let result = res;
      if (res === false) {
        result = this.notFound;
      }
      return result;
    },

    lastIndexOf(arr, element) {
      let res = false;
      for (let i = arr.length - 1; i >= 0; i -= 1) {
        if (arr[i] === element) {
          res = i;
        }
      }
      let result = ((arr.length) - res);
      if (res === false) {
        result = this.notFound;
      }
      return result;
    },

    includes(arr, elem) {
      let res = false;
      for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === elem) {
          res = true;
          break;
        } else {
          res = false;
        }
      }
      return res;
    },
  };
})();
const y = [34, 6, 7];
const t = App.lastIndexOf(y, 34);
console.log(t);
module.exports = App;
