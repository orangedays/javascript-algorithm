// 冒泡排序
const util = require('./util');
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        util.swap(arr, j, j + 1)
      }
    }
  }
  return arr;
}

console.log(bubbleSort([7, 6, 7, 8, 9, 0]))
