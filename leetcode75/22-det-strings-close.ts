function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) {
    return false;
  }

  // let diff1: string = "";
  // let diff2: string = "";
  // for (let i = 0; i < word1.length; i++) {
  //   if (word1[i] !== word2[i]) {
  //     diff1 += word1[i];
  //     diff2 += word2[i];
  //   }
  // }

  // console.log("diffs:", diff1, diff2);

  // create object of letter counts that occur in both diffs
  let letterObj: any = {};

  for (let char of word1) {
    // console.log("char:", char);
    if (letterObj[char] === undefined) {
      letterObj[char] = 1;
    } else {
      letterObj[char]++;
    }
  }
  // console.log(letterObj)

  let arr1: Array<number> = [];

  for (let key in letterObj) {
    // console.log("key:", key, letterObj[key])
    arr1.push(letterObj[key])
  }
  arr1.sort();
  // console.log(arr1);


  // sort the values of these counts and they should be the same. eg 1, 3, 5 works with 5, 1, 3

  let letterObj2: any = {};

  for (let char of word2) {
    // console.log("char:", char);
    if (letterObj2[char] === undefined) {
      letterObj2[char] = 1;
    } else {
      letterObj2[char]++;
    }
  }
  // console.log(letterObj2)

  let arr2: Array<number> = [];
  let letterArr2: Array<string> = [];

  for (let key in letterObj2) {
    console.log("key:", key, letterObj2[key], "letterObj2.key", letterObj2.key)
    arr2.push(letterObj2[key])
  }
  arr2.sort();
  // console.log(arr2);

  // return true if equal, false if not equal. array or string comparison?
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

console.log(closeStrings("abbcb", "baaca"));
