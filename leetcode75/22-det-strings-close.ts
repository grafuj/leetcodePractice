function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) {
    return false;
  }

  let diff1: string = "";
  let diff2: string = "";
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      diff1 += word1[i];
      diff2 += word2[i];
    }
  }

  console.log("diffs:", diff1, diff2);

  // create object of letter counts that occur in both diffs

  // sort the values of these counts and they should be the same. eg 1, 3, 5 works with 5, 1, 3

  // return true if equal, false if not equal. array or string comparison?

  return true;
}

console.log(closeStrings("abbcb", "baaca"));
