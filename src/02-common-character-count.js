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
  let number = 0;

  const string1 = s1.split('');
  const string2 = s2.split('');

  string1.forEach((e) => {
    if (string2.includes(e)) {
      number++;
      string2.splice(string2.indexOf(e), 1);
    }
  });

  return number;
}

module.exports = getCommonCharacterCount;
