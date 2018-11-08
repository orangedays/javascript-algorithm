function MergeSort(arr, l, r) {
  if( l >= r ) {
    return;
  }  
  const mid = Math.floor((l + r) / 2);
  MergeSort(arr, l, mid);
  MergeSort(arr, mid + 1, r);
  merge(arr, l, mid, r);
}

function merge(arr, l, mid, r) {
  let newArr = [];
  for (let i = l; i <= r; i++) {
    newArr[i - l] = arr[i];
  }
  let i = l;
  let j = mid + 1;
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = newArr[j - l];
      j++;
    } else if (j > r) {
      arr[k] = newArr[i - l];
      i++;
    } else if (newArr[i - l] < newArr[j - l]) {
      arr[k] = newArr[i - l];
      i++;
    } else {
      arr[k] = newArr[j - l];
      j++;
    }
  }
}
let arr = [7, 6, 7, 8, 9, 0]
MergeSort(arr, 0, 5);
console.log(arr);