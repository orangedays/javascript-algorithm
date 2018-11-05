// 整理扑克牌就是插入排序，依照顺序把元素放在合适的位置 O(n²)

const util = require('./util');
function insertionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for(let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        util.swap(arr, j, j - 1);
      } else {
        break;
      }
    }
  }
  return arr;
}

console.log(insertionSort([7, 6, 7, 8, 9, 0]))