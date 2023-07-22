/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  if (str1 + str2 !== str2 + str1) {
      //no common element
      return "";
  }

  let isValid = (word, str) => {
      
  }

  let result = "";

  for (let i = 0; i < str1.length){
      let slice = str1.slice(0, i);
      if(isValid(slice, str2)){

      }
  }

  let smallest = "";
  if (str1 >= str2){
      smallest = str2;
  } else if (str2 > str1) {
      smallest = str1;
  } else {
      console.log("error in lengths")
  }
  
};