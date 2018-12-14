https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
/**
 * time: O(logn)
 * space: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums === null || nums.length === 0) {
    return [-1, -1];
  }
  let left = findFirst(nums, target);
  if (left === -1) {
    return [-1, -1];
  }
  let right = findLast(nums, target);
  return [left, right];
};

function findFirst(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left + 1 < right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }
  if (nums[left] === target) {
    return left;
  }
  if (nums[right] === target) {
    return right;
  }
  return -1;
}

function findLast(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left + 1 < right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] > target) {
      right = mid;
    } else {
      left = mid;
    }
  }
  if (nums[right] === target) {
    return right;
  }
  if (nums[left] === target) {
    return left;
  }
  return -1;
}