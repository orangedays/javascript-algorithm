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
      util.swap(arr, arr[i], arr[j]);
    }
  }
  util.swap(arr, arr[left], arr[i]);
  return i;
}