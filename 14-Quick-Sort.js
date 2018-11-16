const util = require('./util');
function quickSort(arr, left, right) {
  if (left >= right) {
    return;
  }
  const pivot = partition(arr, left, right);
  quickSort(arr, left, pivot - 1);
  quickSort(arr, pivot + 1, right);
}

function partition(arr, left, right) {
  let v = arr[left];
  let i = left;
  for (let j =left + 1; j <= right; j++) {
    if (arr[j] < v) {
      i++;
      util.swap(arr, i, j);
    }
  }
  util.swap(arr, left, i);
  return i;
}

let arr = [7, 6, 7, 8, 9, 0]
quickSort(arr, 0, 5);
console.log(arr);