// https://leetcode-cn.com/problems/generate-parentheses/
/** time: O(n!) ~ O(n^2)
 * space: O(n)
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = [];
  if (n === 0) {
    return result;
  }
  
  helper(result, '', n, n);
  return result;
};
function helper(result, s, left, right) {
  if (left > right) {
    return;
  }
  if (left === 0 && right === 0) {
    result.push(s);
    return;
  }
  if (left > 0) {
    helper(result, s + '(', left - 1, right);
  }
  if (right > 0) {
    helper(result, s + ')', left, right - 1);
  }
}