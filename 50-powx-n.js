//leetcode-cn.com/problems/powx-n/
https: /**
 * time: O(logn)
 * space: O(n)
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  // 递归形式
  if (n > 0) {
    return pow(x, n);
  } else {
    return 1.0 / pow(x, Math.abs(n));
  }
};

function pow(x, n) {
  if (n <= 0) {
    return 1;
  }
  const y = pow(x, Math.floor(n / 2));
  if (n % 2 === 0) {
    return y * y;
  } else {
    return y * y * x;
  }
}
