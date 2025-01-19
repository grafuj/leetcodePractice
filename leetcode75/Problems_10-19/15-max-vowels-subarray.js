"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maxVowels(s, k) {
    function countVowels(string) {
        let count = 0;
        let stringLength = string.length;
        for (let i = 0; i < stringLength; i++) {
            if (string[i] === "a" ||
                string[i] === "e" ||
                string[i] === "i" ||
                string[i] === "o" ||
                string[i] === "u") {
                count++;
            }
        }
        return count;
    }
    let maxVowels = 0;
    let stringLength = s.length;
    let arrayOptions = stringLength - k;
    for (let i = 0; i <= arrayOptions; i++) {
        let subString = s.slice(i, i + k);
        // console.log("subString:", subString, "maxVowels:", maxVowels);
        let currentVowelCount = countVowels(subString);
        if (currentVowelCount > maxVowels) {
            maxVowels = currentVowelCount;
        }
    }
    return maxVowels;
}
// console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("weallloveyou", 7));
