// https://leetcode-cn.com/problems/divide-two-integers/submissions/
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let sign = 1;
  let result = 0;
  if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
    sign = -1;
  }
  let dividendAbs = Math.abs(dividend);
  let divisorAbs = Math.abs(divisor);
  if (dividendAbs < divisorAbs || dividendAbs === 0) {
    return 0;
  }
  result = divideProcess(dividendAbs, divisorAbs);
  if (result > Math.pow(2, 31) - 1) {
    result = (sign === 1) ? Math.pow(2, 31) - 1 : Math.pow(-2, 31);
  } else {
    result = sign * result;
  }
  return result;
};

function divideProcess(dividendAbs, divisorAbs) {
  if (dividendAbs < divisorAbs) {
    return 0;
  }
  let sum = divisorAbs;
  let multiple = 1;
  while((sum + sum) <= dividendAbs) {
    sum += sum;
    multiple += multiple;
  }
  return multiple + divide(dividendAbs - sum, divisorAbs);
}
