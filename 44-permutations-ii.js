// https://leetcode-cn.com/problems/permutations-ii/
/**
 * time: O(n!)
 * space: O(n)
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let result = [];
  if (nums === null || nums.length === 0) {
    return result;
  }
  // 要去重先排序
  nums.sort((a, b) => a - b);
  help(result, [], nums, []);
  return result;
};

function help(result, arr, nums, exist) {
  if (arr.length === nums.length) {
    result.push(arr.slice());
  }
  for (let i = 0; i < nums.length; i++) {
    if (exist[i] || (i > 0 && nums[i] === nums[i - 1] && !exist[i - 1])) {
      continue;
    }
    exist[i] = true;
    arr.push(nums[i]);
    help(result, arr, nums, exist);
    exist[i] = false;
    arr.pop();
  }
}
