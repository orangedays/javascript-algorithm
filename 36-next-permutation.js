/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (nums === null || nums.length === 0) {
    return;
  }
  let small = -1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      small = i;
      break;
    }
  }
  if (small === -1) {
    reverse(nums, 0, nums.length - 1);
    return;
  }
  let large = -1;
  for (let i = nums.length - 1; i > small; i--) {
    if (nums[i] > nums[small]) {
      large = i;
      break;
    }
  }
  swap(nums, small, large);
  reverse(nums, small + 1, nums.length - 1);
  return;
};

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function reverse(nums, i, j) {
  while (i < j) {
    swap(nums, i++, j--);
  }
}
