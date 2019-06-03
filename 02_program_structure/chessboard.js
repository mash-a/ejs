/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height. 
*/

const chessBoard = (n = 8) => {
  let board = "";
  let strLen = Math.pow(n, 2);
  let lastChar = " ";
  let nextChar = "#";
  //the last char becomes the odd
  let currentLine;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if(j % 2 === 0) {
        currentLine += lastChar;
      } else {
        currentLine += nextChar;
      }
    }
    lastChar = 
    board += currentLine;
  }
  return board;
};
