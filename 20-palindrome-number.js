//https://leetcode-cn.com/problems/palindrome-number

const isPalindrome = function(x) {
  const strArr = x.toString().split('');
  while (strArr.length > 1) {
    if (strArr.pop() !== strArr.shift()) {
      return false;
    }
  }
  return true;
};
