// 三路快速排序
// 将数组分为<v/=v/>v三部分
const util = require('./util');
function quickSort(arr, left, right) {
  if (left > right) {
    return;
  }
  const v = arr[left];
  let lt = left;
  let gt = right + 1;
  for(let i = left + 1; i < gt;) {
    if (arr[i] === v) {
      i++;
    } else if (arr[i] < v) {
      util.swap(arr, lt + 1, i);
      lt++;
      i++;
    } else if (arr[i] > v) {
      util.swap(arr, gt - 1, i);      
      gt--;
    }
  }
  util.swap(arr, left, lt);
  quickSort(arr, left, lt - 1);
  quickSort(arr, gt, right); 
}

let arr = [7, 6, 7, 8, 9, 0]
quickSort(arr, 0, 5);