https://leetcode-cn.com/problems/valid-parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s) {
      return true;
  }
  const sArr = s.split('');
  const leftArr = ['(', '{', '['];
  const rightArr = [')', '}', ']'];
  let leftStack = [];
  for(let i = 0; i < sArr.length; i++) {
     if (leftArr.indexOf(sArr[i]) > -1){
          leftStack.push(sArr[i])
      } else {
          const rightIndex = rightArr.indexOf(sArr[i]);
          if (leftStack.pop() !== leftArr[rightIndex]) {
              return false;
          }
      }
  }
  if (leftStack.length) {
      return false;
  }
  return true;
};