function mergeSort(arr) {
  const len = arr.length;
  for(let i = 1; i <= len; i += i) {
    for(let j = 0; j + i < len; j += i + i) {
      merge(arr, j, j + i - 1, Math.min(j + i + i - 1, len - 1));
    }
  }
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
mergeSort(arr);
console.log(arr);