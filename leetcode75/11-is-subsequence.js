function isSubsequence(s, t) {
    if (s.length > t.length || !s.length) {
        return false;
    }
    var tLength = t.length;
    var subSequenceIndex = 0;
    for (var i = 0; i < tLength; i++) {
        // remove  characters from t (big string) if they are not in s (small string)
        if (s[subSequenceIndex] === t[i]) {
            subSequenceIndex++;
        }
    }
    return s.length === subSequenceIndex;
    // console.log("reducedT: ", reducedT, "splitT: ", splitT);
}
var ex1 = "abc";
var ex2 = "abafk;sasc";
console.log(isSubsequence(ex1, ex2));
