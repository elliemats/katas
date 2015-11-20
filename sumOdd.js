/* ******************* Ellie's Solution ******************* */

/**
  * @ Description - [rowSumOddNumbers] - Calculate sum of triangle from row index.
  * @ Params - {number} - [i] - row index
  * @ Output - {number} - [sum] - sum of odd numbers in that row
*/

function rowSumOddNumbers(i) {
  if (i % 1) return 'Invalid row. Input a whole number.';
  
  var sum = Math.pow(i, 3);
  return sum;
}