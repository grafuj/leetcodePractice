function isSubsequence(s: string, t: string): boolean {
  if(s.length > t.length || !s.length){
    return false;
  }
  let splitS: Array<string> = s.split("");
  let splitT: Array<string> = t.split("");
  let reducedT: Array<string> = [];
  for (let i = 0; i < t.length; i++) {
    // remove  characters from t (big string) if they are not in s (small string)
    console.log("t[i]", t[i], "splitS.indexOf(t[i]): ", splitS.indexOf(t[i]));
    if (splitS.indexOf(t[i]) !== -1) {
      // not included, splice it baby
      // console.log("before reducedT: ", reducedT, "splitT: ", splitT);
      // this line doesn't take the char as it is removed and push it onto reducedT
      // reducedT = splitT.splice(i, 1);
      reducedT.push(splitT[i]);
      console.log("reducedT: ", reducedT)
      // console.log("after reducedT: ", reducedT, "splitT: ", splitT);
    }
  }
  // console.log("reducedT: ", reducedT, "splitT: ", splitT)
  return true;
}

const ex1: string = "abc";
const ex2: string = "abafk;sasc";
console.log(isSubsequence(ex1, ex2));
