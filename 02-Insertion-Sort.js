// 整理扑克牌就是插入排序，依照顺序把元素放在合适的位置 O(n²)

const util = require('./util');
function insertionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    // 写法一
    // for(let j = i; j > 0; j--) {
    //   if (arr[j] < arr[j - 1]) {
    //     util.swap(arr, j, j - 1);
    //   } else {
    //     break;
    //   }
    // }

    // 写法二
    // const e = arr[i];
    // let j; // j保存元素e应该插入的位置
    // for(j = i; j > 0 && arr[j - 1] > e; j--) {
    //   arr[j] = arr[j - 1];
    // }
    // arr[j] = e;

    // 写法三
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    util.swap(arr, i, minIndex);
  }
  return arr;
}

console.log(insertionSort([7, 6, 7, 8, 9, 0]))