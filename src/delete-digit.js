const { NotImplementedError } = require("../extensions/index.js");

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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let array = n.toString().split("").map(Number);

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      array.splice(i - 1, 1);
      break;
    }
    if ((i === array.length - 1)) {
      array.pop();
    }
  }
  return +array.join("");
}

module.exports = {
  deleteDigit,
};
