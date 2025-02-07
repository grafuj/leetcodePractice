"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function closeStrings(word1, word2) {
    let diff1 = "";
    let diff2 = "";
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            diff1 += word1[i];
            diff2 += word2[i];
        }
    }
    console.log("diffs:", diff1, diff2);
    return true;
}
console.log(closeStrings("abbcb", "baaca"));
