// https://leetcode-cn.com/problems/3sum
/**
 * time: O(n^2);
 * space: O(n);
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    sum = 0 - nums[i];
    while (left < right) {
      if (nums[left] + nums[right] === sum) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (nums[left] + nums[right] < sum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};
