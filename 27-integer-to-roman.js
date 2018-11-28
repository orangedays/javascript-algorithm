// https://leetcode-cn.com/problems/integer-to-roman
/**
 * time: O(n)
 * space O(1)
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let result = '';
  const number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  for (let i = 0; i < number.length; i++) {
    while (num >= number[i]) {
      num -= number[i];
      result += roman[i];
    }
  }
  return result;
};