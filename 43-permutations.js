// https://leetcode-cn.com/problems/permutations/
/**
 * time: O(n!)
 * space: O(n)
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = [];
  if (nums === null || nums.length === 0) {
    return res;
  }
  helper(result, [], nums);
  return result;
};

function helper(result, arr, nums) {
  if (arr.length === nums.length) {
    result.push(arr.slice());
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (arr.indexOf(nums[i]) > -1) {
      continue;
    }
    arr.push(nums[i]);
    helper(result, arr, nums);
    arr.pop();
  }
}
