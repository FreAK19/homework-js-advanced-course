let i = 0;
function consoleRec(arr, other) {
  if (i < arr.length) {
    console.log(arr[i]);
    i += 1;
    consoleRec(arr);
  }
  return arr[other];
}

const t = consoleRec(['I', 'love', 'JS', 'because', 'Its', 'very', 'easy'], 5);
console.log(t);
