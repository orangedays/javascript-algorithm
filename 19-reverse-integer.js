// https://leetcode-cn.com/problems/reverse-integer
/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  const str = x
    .toString()
    .split("")
    .reverse()
    .join("");
  let reversed = Math.sign(x) * parseInt(str);
  if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
    reversed = 0;
  }
  return reversed;
};
