// https://leetcode-cn.com/problems/combination-sum/
/**
 * time: O(2^n)
 * space: O(n)
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let result = [];
  if (candidates === null || candidates.length === 0) {
    return result;
  }
  helper(result, [], candidates, target, 0);
  return result;
};

function helper(result, arr, candidates, target, start) {
  if (target < 0) {
    return;
  }
  if (target === 0) {
    result.push(arr.slice());
    return;
  }
  for (let i = start; i < candidates.length; i++) {
    arr.push(candidates[i]);
    helper(result, arr, candidates, target - candidates[i], i);
    arr.pop();
  }
}



