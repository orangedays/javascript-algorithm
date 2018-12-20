// https://leetcode-cn.com/problems/multiply-strings
/**
 * time: O(n * m)
 * space: O(n + m)
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === null || num2 === null) {
    return '0';
  }
  let resultArr = [];
  for (let i = num1.length - 1; i >=0; i--) {
    for (let j = num2.length -1; j >=0; j--) {
      const product = Number(num1[i]) * Number(num2[j]);
      const p1 = i + j;
      const p2 = i + j + 1;
      const sum = product + (resultArr[p2] ? Number(resultArr[p2]) : 0);
      resultArr[p1] = (resultArr[p1] ? Number(resultArr[p1]) : 0) + Math.floor(sum / 10);
      resultArr[p2] = sum % 10;
    }
  }
  const result = resultArr.join('').replace(/^0+/, '');
  return !result.length ? '0' : result;
};