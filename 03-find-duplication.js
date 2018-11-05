// 剑指offer
// 面试题3（一）：找出数组中重复的数字
// 题目：在一个长度为n的数组里的所有数字都在0到n-1的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，
// 也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。例如，如果输入长度为7的数组{2, 3, 1, 0, 2, 5, 3}，
// 那么对应的输出是重复的数字2或者3。

// 思路一：排序后(nlogn)找重复数字
// 思路二：哈希表，从头到尾按顺序扫描数组的每个数字，每扫到一个数字，用O(1)时间判断哈希表中是否已经存在:O(n)时间 + O(n)空间
// 思路三：
const util = require('./util');

function findDuplication(arr) {
  const len = arr.length;
  let duplication = [];
  for (let i = 0; i < len; i++) {
    if (arr[i] !== i) {
      if (arr[i] === arr[arr[i]]) {
        duplication.push(arr[i]);
      } else {
        util.swap(arr, i, arr[i]);
      }
    }
  }
  return duplication;
}

console.log(findDuplication([4, 4, 1, 2, 3, 2]));