"use strict";
// Given a string s, reverse only all the vowels in the string and return it.
Object.defineProperty(exports, "__esModule", { value: true });
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
function reverseVowels(s) {
    const vowelArray = [];
    let result = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a" ||
            s[i] === "e" ||
            s[i] === "i" ||
            s[i] === "o" ||
            s[i] === "u" ||
            s[i] === "A" ||
            s[i] === "E" ||
            s[i] === "I" ||
            s[i] === "O" ||
            s[i] === "U") {
            vowelArray.push(s[i]);
        }
    }
    console.log("vowelArray: ", vowelArray);
    // we have our vowel array, we need to put them back in
    let vowelCounter = vowelArray.length - 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a" ||
            s[i] === "e" ||
            s[i] === "i" ||
            s[i] === "o" ||
            s[i] === "u" ||
            s[i] === "A" ||
            s[i] === "E" ||
            s[i] === "I" ||
            s[i] === "O" ||
            s[i] === "U") {
            console.log("letter: ", s[i]);
            // swap lmao
            result += vowelArray[vowelCounter];
            vowelCounter--;
        }
        else {
            result += s[i];
        }
    }
    return result;
}
// Input: s = "IceCreAm"
// Output: "AceCreIm"
const string1 = "IceCreAm";
console.log(reverseVowels(string1));
