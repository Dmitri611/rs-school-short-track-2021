/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = [];
  const arr1 = [];
  let count = 1;
  let curr;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      curr = str[i];
      count++;
    }
    if (count === 1) {
      curr = str[i];
    }
    if (str[i] !== str[i + 1]) {
      arr.push(count, curr);
      count = 1;
      curr = str[i + 1];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 1) {
      arr1.push(arr[i]);
    }
  }
  return arr1.join('').toString();
}

module.exports = encodeLine;
