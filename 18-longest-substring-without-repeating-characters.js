// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  const characterMap = new Map();
  let start = (max = 0);
  for (let i = 0; i < s.length; i++) {
    const character = s[i];
    if (characterMap.has(character) && characterMap.get(character) >= start) {
      start = characterMap.get(character) + 1;
    }
    characterMap.set(character, i);
    max = Math.max(max, i - start + 1);
  }
  return max;
};
