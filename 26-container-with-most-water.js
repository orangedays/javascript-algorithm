// https://leetcode-cn.com/problems/container-with-most-water/submissions/
/**
 * time: O(n)
 * space: O(1)
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let result = 0;
  let l = 0; r = height.length - 1;
  while (l < r) {
    result = Math.max(result, Math.min(height[l], height[r]) * (r - l));
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return result;
};