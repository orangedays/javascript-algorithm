/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let sArr = s.split(s);
  while (sArr.length > 1) {
    if (sArr.pop() !== sArr.shift()) {
      return false;
    }
  }
  return true;
};