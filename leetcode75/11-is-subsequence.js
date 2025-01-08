function isSubsequence(s, t) {
    var splitS = s.split("");
    var splitT = t.split("");
    var reducedT = [];
    for (var i = 0; i < t.length; i++) {
        // remove  characters from t (big string) if they are not in s (small string)
        console.log("t[i]", t[i], "splitS.indexOf(t[i]): ", splitS.indexOf(t[i]));
        if (splitS.indexOf(t[i]) !== -1) {
            // not included, splice it baby
            // console.log("before reducedT: ", reducedT, "splitT: ", splitT);
            // this line doesn't take the char as it is removed and push it onto reducedT
            // reducedT = splitT.splice(i, 1);
            reducedT.push(splitT[i]);
            console.log("reducedT: ", reducedT);
            // console.log("after reducedT: ", reducedT, "splitT: ", splitT);
        }
    }
    // console.log("reducedT: ", reducedT, "splitT: ", splitT)
    return true;
}
var ex1 = "abc";
var ex2 = "abafk;sasc";
console.log(isSubsequence(ex1, ex2));
