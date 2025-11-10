const { NotImplementedError } = require("../lib");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // Remove line below and write your code here
  //throw new NotImplementedError('Not implemented');
  /*
  if (typeof n !== "number" || !Number.isInteger(n)) return false;

  const arrayDigit = [...String(n)];
  const minValue = Math.min(...arrayDigit.map(Number));
  const minIndex = arrayDigit.indexOf(String(minValue));
  arrayDigit.splice(minIndex, 1);

  return Number(arrayDigit.join(""));*/

  const arrayDigit = [...String(n)];
  let maxDigit = 0;
  for (let i = 0; i < arrayDigit.length; i++) {
    let copy = [...arrayDigit];
    copy.splice(i, 1);
    let value = Number(copy.join(""));
    if (value > maxDigit) maxDigit = value;
  }
  return maxDigit;
}

module.exports = {
  deleteDigit,
};
