const array = [3, 5, 6, 23, 56, ['res']];
array.__proto__ = null;

function InnerError(message, name) {
  this.message = message;
  this.name = name;
}
InnerError.prototype = Object.create(Error.prototype);

//  haven`t full realisation

function filter(arr, fn) {
  for (let i = 0; i < arr.length; i += 1) {
    fn(arr[i], i, arr);
  }
}

//  filter(array, elem => console.log(elem > 5));

function push(arr, elements) {
  arr[arr.length] = elements;
  return ' ';
}

function forEach(arr, fn) {
  if (!Array.isArray(arr)) {
    throw new InnerError('First argument should be array');
  }
  for (let i = 0; i < arr.length; i += 1) {
    fn(arr[i], i, arr);
  }
}

try {
  //  forEach([5, 6, 90], elem => console.log(elem * 10));
  //  return 50, 60, 90
} catch (e) {
  console.log(`InnerError: ${e.message}`);
}

function slice(arr, start, end) {
  let st = parseInt(start, 10);
  if (Number.isNaN(st)) {
    st = 0;
  }
  const result = [];
  let length = end;
  if (end === 0 || end === undefined) {
    length = arr.length;
  }
  for (let i = st; i < length; i += 1) {
    result.push(arr[i]);
  }
  return result;
}

//  console.log(slice([34, 5, 7, 1], '1', 3));
//  return [5, 7]

function map(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push(fn(arr[i], i, arr));
  }
  return result;
}

//  console.log(map(array, elem => Math.cbrt(elem)));
/*    return [1.4422495703074083,
              1.709975946676697,
              1.8171205928321397,
              2.8438669798515654,
              3.8258623655447783,
              NaN]*/


// not realised !IMPORTANT

function splice(arr, start, count, ...rest) {
  const [deleted, t, restElem] = [[], arr, []];
  //  get deleted elements for return them
  for (let i = start; i < start + count; i += 1) {
    push(deleted, arr[i]);
    delete t[i];
  }
  for (let i = 0; i < rest.length; i += 1) {
    t[start + i] = rest[i];
  }
  /*
   for (let i = start; i < start + count; i += 1) {

   }
   Array.prototype.concat.call(t, deleted);*/
  return deleted;
}
//  console.log(splice(array, 2, 3, 45, 67, 'sfd', 'some'));

