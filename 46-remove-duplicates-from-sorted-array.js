// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[count++] = nums[i];
    }
  }
  return count;
};