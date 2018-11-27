// https://leetcode-cn.com/problems/zigzag-conversion/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows <= 1) {
    return s;
  }
  const len = s.length;
  var arr = Array(numRows).fill("");
  for (let i = 0; i < len; i++) {
    let index = i % (2 * numRows - 2);
    index = index < numRows ? index : 2 * numRows - 2 - index;
    arr[index] += s[i];
  }
  return arr.join("");
};
