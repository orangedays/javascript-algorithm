// https://leetcode-cn.com/problems/search-in-rotated-sorted-array
/**
 * time: O(logn)
 * space: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums === null || nums.length === 0) {
    return -1;
  }
  let left = 0;
  let right = nums.length - 1;
  while (left + 1 < right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[left] < nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid;
      } else {
        left = mid;
      }
    } else {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid;
      } else {
        right = mid;
      }
    }
  }
  if (nums[left] === target) {
    return left;
  }
  if (nums[right] === target) {
    return right;
  }
  return -1;
};