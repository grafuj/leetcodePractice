function maxVowels(s, k) {
    function countVowels(string) {
        var count = 0;
        var stringLength = string.length;
        for (var i = 0; i < stringLength; i++) {
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
    var maxVowels = 0;
    var stringLength = s.length;
    var arrayOptions = stringLength - k;
    for (var i = 0; i <= arrayOptions; i++) {
        var subString = s.slice(i, i + k);
        console.log("subString:", subString, "maxVowels:", maxVowels);
        var currentVowelCount = countVowels(subString);
        if (currentVowelCount > maxVowels) {
            maxVowels = currentVowelCount;
        }
    }
    return maxVowels;
}
// console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("weallloveyou", 7));
