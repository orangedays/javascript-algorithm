// https://leetcode-cn.com/problems/valid-sudoku/
/**
 * time: O(n^2)
 * space: O(n)
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (let i = 0; i < board.length; i++) {
    let rows = [];
    let cols = [];
    let cubes = [];
    for (let j = 0; j < board[0].length; j++) {
      console.log(i, j, board[i][j], board[j][i]);
      if (board[i][j] !== '.' && rows.indexOf(board[i][j]) > -1) {
        return false;
      } else {
        rows.push(board[i][j]);
      }
      if (board[j][i] !== '.' && cols.indexOf(board[j][i]) > -1) {
        return false;
      } else {
        cols.push(board[j][i]);
      }
      let rowIndex = 3 * Math.floor(i / 3);
      let colIndex = 3 * (i % 3);
      if (board[rowIndex + Math.floor(j / 3)][colIndex + j % 3] !== '.' && cubes.indexOf(board[rowIndex + Math.floor(j / 3)][colIndex + j % 3]) > -1) {
        return false;
      } else {
        cubes.push(board[rowIndex + Math.floor(j / 3)][colIndex + j % 3]);
      }
    }
  }
  return true;
};