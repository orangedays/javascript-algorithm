https://leetcode-cn.com/problems/longest-common-prefix/submissions/
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  strs = strs.concat().sort();
  if (!strs.length) {
    return '';
  }
  const n = strs[0],
    len = n.length,
    m = strs[strs.length - 1];
  let i = 0;
  while (i < len && n.charAt(i) === m.charAt(i)) {
    i++;
  }
  return n.substring(0, i);
};