const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  const resultArr = new Array(...arr);  
  for (let i = 0; i < resultArr.length; i++) { 
    if (resultArr[i] === "--discard-next") {
      if (resultArr[i+1]) {
        resultArr.splice(i,2,"_")
      } else {
        resultArr.splice(i,1,"_")
      }
    }
    if (resultArr[i] === "--discard-prev") {
      if (i>0) {
        resultArr.splice(i-1,2,"_")
      } else {
        resultArr.splice(i,1,"_")
      }
    }
    if (resultArr[i] === "--double-next") {
      if (resultArr[i+1]) {
        resultArr.splice(i,1,resultArr[i+1])
      } else {
        resultArr.splice(i,1,"_")
      }
    }
    if (resultArr[i] === "--double-prev") {
      if (i > 0) {
        resultArr.splice(i,1,resultArr[i-1])
      } else {
        resultArr.splice(i,1,"_")
      }
    }
  }
  return resultArr.filter((el) => {
    return  el !=="_"
  })
}

module.exports = {
  transform
};
