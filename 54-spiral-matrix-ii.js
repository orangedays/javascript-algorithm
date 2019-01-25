// https://leetcode-cn.com/problems/spiral-matrix-ii/
/**
 * time: O(n)
 * space: O(n)
 * @param {number} n
 * @return {number[][]}
 */
// Array.fill([])、Array(n).map(item => []);不可以
var generateMatrix = function(n) {
  let matrix = [...Array(n)].map(item => []);
  let rowBegin = 0;
  let rowEnd = n - 1;
  let colBegin = 0;
  let colEnd = n - 1;
  let num = 1;

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    for (let i = colBegin; i <= colEnd; i++) {
      matrix[rowBegin][i] = num++;
    }
    rowBegin++;
    for (let i = rowBegin; i <= rowEnd; i++) {
      matrix[i][colEnd] = num++;
    }
    colEnd--;
    for (let i = colEnd; i >= colBegin; i--) {
      matrix[rowEnd][i] = num++;
    }
    rowEnd--;
    for (let i = rowEnd; i >= rowBegin; i--) {
      matrix[i][colBegin] = num++;
    }
    colBegin++;
  }
  return matrix;
};