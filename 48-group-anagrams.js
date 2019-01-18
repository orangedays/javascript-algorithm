// https://leetcode-cn.com/problems/group-anagrams
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var groupMap = strs.reduce(function(accumulator, currentValue) {
    const sorted = currentValue.split('').sort().join('');
    if (accumulator[sorted]) {
      accumulator[sorted].push(currentValue);
    } else {
      accumulator[sorted] = [currentValue];
    }
    return accumulator;
  }, {});
  return Object.values(groupMap);
};