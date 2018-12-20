// https://leetcode-cn.com/problems/combination-sum-ii
/**
 * time: O(2^n)
 * space: O(n)
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let result = [];
  if (candidates === null || candidates.length === 0) {
    return result;
  }
  candidates.sort((a, b) => a -b);
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
    if (i !== start && candidates[i] === candidates[i - 1]) {
      continue;
    }
    arr.push(candidates[i]);
    helper(result, arr, candidates, target - candidates[i], i + 1);
    arr.pop();
  }
}