function isSubsequence(s, t) {
    var splitS = s.split("");
    var splitT = t.split("");
    var reducedT = [];
    for (var i = 0; i < t.length; i++) {
        if (splitS.indexOf(t[i]) !== -1) {
            // not included, splice it baby
            console.log("before reducedT: ", reducedT, "splitT: ", splitT);
            reducedT = splitT.splice(i, 1);
            console.log("after reducedT: ", reducedT, "splitT: ", splitT);
        }
    }
    // console.log("reducedT: ", reducedT, "splitT: ", splitT)
    return true;
}
var ex1 = "abc";
var ex2 = "abafk;sasc";
console.log(isSubsequence(ex1, ex2));
