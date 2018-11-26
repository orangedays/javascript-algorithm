// https://leetcode-cn.com/problems/longest-palindromic-substring
/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
  let max = 0;
  let palindromeString = '';
  const len = s.length;
  if (len <= 1) {
    return s;
  }
  for(let i = 0; i < len - 1; i++) {
    checkPalindromeExpand(s, i, i);
    checkPalindromeExpand(s, i, i + 1);
  }
  function checkPalindromeExpand(s, left, right) {
    while (left >= 0 && right < s.length) {
      if(s[left] === s[right]) {
        if(right - left + 1 > max) {
          max = right - left + 1;
          palindromeString = s.substring(left, right + 1);
        }
        left--;
        right++;
      } else {
        return;
      }
    }
  }
  return palindromeString;
};

