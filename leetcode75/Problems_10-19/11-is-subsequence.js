"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isSubsequence(s, t) {
    if (s.length > t.length) {
        // can't check for empty strings as testcases ask for "" and "" to return true >:c
        return false;
    }
    let tLength = t.length;
    let subSequenceIndex = 0;
    for (let i = 0; i < tLength; i++) {
        // if the current character in small string is the same as the one in big string, we can go next in small string
        if (s[subSequenceIndex] === t[i]) {
            subSequenceIndex++;
        }
    }
    return s.length === subSequenceIndex;
}
const ex1 = "abc";
const ex2 = "abafk;sasc";
console.log(isSubsequence(ex1, ex2));
