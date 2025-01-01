function isSubsequence(s: string, t: string): boolean {
  let splitS: Array<string> = s.split("");
  let splitT: Array<string> = t.split("");
  let reducedT: Array<string> = [];
  for (let i = 0; i < t.length; i++) {
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

const ex1: string = "abc";
const ex2: string = "abafk;sasc";
console.log(isSubsequence(ex1, ex2));
