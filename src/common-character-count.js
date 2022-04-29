const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = [];
  let arrS1 = s1.split("");
  let arrS2 = s2.split("");
  for (let i = 0; i < arrS1.length; i++) {   
    const index = arrS2.indexOf(arrS1[i])
    if (index !== -1) {
      result.push(arrS2[index])
      arrS2.splice(index, 1)
    }
  }
  return result.length
}

module.exports = {
  getCommonCharacterCount
};
