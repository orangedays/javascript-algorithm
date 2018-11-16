// 双路快速排序
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
  const v = arr[left];
  let i = left + 1;
  let j = right;
  while(true) {
    while(i <= right && arr[i] < v) {
      i++;
    }
    while(j >= left + 1 && arr[j] > v) {
      j--;
    }
    if( i > j ) {
      break;
    }
    util.swap(arr, i, j);
    i++;
    j--;
  }
  util.swap(arr, left, j);
  return j;
}

let arr = [7, 6, 7, 8, 9, 0]
quickSort(arr, 0, 5);
console.log(arr);