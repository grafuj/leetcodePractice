function isSubsequence(s: string, t: string): boolean {
  if (s.length > t.length) {
    // can't check for empty strings as testcases ask for "" and "" to return true >:c
    return false;
  }
  let tLength = t.length;
  let subSequenceIndex: number = 0;
  for (let i = 0; i < tLength; i++) {
    // if the current character in small string is the same as the one in big string, we can go next in small string
    if (s[subSequenceIndex] === t[i]) {
      subSequenceIndex++;
    }
  }
  return s.length === subSequenceIndex;
}

const ex1: string = "abc";
const ex2: string = "abafk;sasc";
console.log(isSubsequence(ex1, ex2));
