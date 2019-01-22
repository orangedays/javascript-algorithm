https://leetcode-cn.com/problems/spiral-matrix
 /**
 * time: O(n * m)
 * space: O(n * m)
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let result = [];
  if (
    matrix === null ||
    matrix.length === 0 ||
    matrix[0] === null ||
    matrix[0].length === 0
  ) {
    return result;
  }
  let rowBegin = 0;
  let rowEnd = matrix.length - 1;
  let colBegin = 0;
  let colEnd = matrix[0].length - 1;

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    for (let i = colBegin; i <= colEnd; i++) {
      result.push(matrix[rowBegin][i]);
    }
    rowBegin++;
    for (let i = rowBegin; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd]);
    }
    colEnd--;
    if (rowBegin <= rowEnd) {
      for (let i = colEnd; i >= colBegin; i--) {
        result.push(matrix[rowEnd][i]);
      }
    }
    rowEnd--;
    if (colBegin <= colEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        result.push(matrix[i][colBegin]);
      }
    }
    colBegin++;
  }
  return result;
};
