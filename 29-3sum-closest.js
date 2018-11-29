// https://leetcode-cn.com/problems/3sum-closest
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let result = nums[0] + nums[1] + nums[len - 1];
  for (let i = 0; i < len - 2; i++) {
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      const currentSums = nums[i] + nums[left] + nums[right];
      if (Math.abs(currentSums - target) < Math.abs(result - target)) {
        result = currentSums;
      }
      if (currentSums > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
};