/**
 * 1768. Merge Strings Alternately
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let merged = "";
  if ( word1.length > word2.length){
      for (let i = 0; i < word2.length; i++) {
          //needs to alternate
          merged.push(word1[i]);
          merged.push(word2[i]);
      }
      merged.push(word1.slice(word2.length - 1));
      return merged;
  }
  if ( word2.length > word1.length){
       for (let i = 0; i < word1.length; i++) {
          merged.push(word1[i]);
          merged.push(word2[i]);
      }
      merged.push(word2.slice(word1.length - 1));
      return merged;
  }

};