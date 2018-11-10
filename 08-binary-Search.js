function binarySearch(arr, target) {
  const len = arr.length;
  let left = 0;
  let right = len - 1;
  while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (arr[mid] === target) {
          return mid;
      }
      if (arr[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  return -1;
}

// 递归
function binarySearch(arr, target, left, right) {
  if (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (arr[mid] === target) {
          return mid;
      }
      if (arr[mid] < target) {
          return binarySearch(arr, target, mid + 1, right);
      } else {
        return binarySearch(arr, target, left, mid - 1);
      }
  }
  return -1;
}

let arr = [7, 6, 7, 8, 9, 0]
console.log(binarySearch(arr, 9));