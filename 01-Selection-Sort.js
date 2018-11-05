// 选择排序 O(n²)：选择排序：从剩余的数中选一个最小（大）的
function selectionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if(minIndex > i) {
      let tmp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = tmp;
    }
  }
  return arr;
}

console.log(selectionSort([7, 6, 7, 8, 9, 0]))
