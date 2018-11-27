/**
 * @param {string} str
 * @return {number}
 * time: O(n)
 * space: O(1)
 */
var myAtoi = function(str) {
  if (!str) {
    return 0;
  }
  str = str.trim();
  let result = 0;
  let sign = 1; // 正负
  let start = 0;
  if(str[0] === '+') {
    start++;
  } else if(str[0] === '-') {
    sign = -1;
    start++;
  }
  for(let i = start; i < str.length; i++) {
    if(isNaN(parseInt(str[i]))) {
      return result * sign;
    }
    result = result * 10 + parseInt(str[i]);
    if(sign === 1 && result > Math.pow(2, 31) - 1) {
      return Math.pow(2, 31) - 1;
    } else if (sign === -1 && result > Math.pow(2, 31)) {
      return Math.pow(-2, 31);
    }
  }
  return result * sign;
};
console.log(myAtoi("-91283472332"))