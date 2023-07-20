/**
 * 1768. Merge Strings Alternately
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let merged = "";
  if ( word1.length > word2.length){
      for (char in word2) {
          //needs to alternate
          merged.push(char);
      }
      merged.push(word1.slice(word2.length - 1));
      return merged;
  }
  if ( word2.length > word1.length){
      for (char in word1) {
          merged.push(char);
      }
      merged.push(word2.slice(word1.length - 1));
      return merged;
  }

};