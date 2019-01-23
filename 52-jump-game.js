// https://leetcode-cn.com/problems/jump-game/
/**
 * time: O(n)
 * space: O(1)
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > max) {
      return false;
    }
    max = Math.max(nums[i] + i, max);
  }
  return true;
};
