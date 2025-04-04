function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) {
    return false;
  }

  // create object of letter counts that occur in both diffs
  let letterObj1: any = {};
  let letterObj2: any = {};

  for (let i = 0; i < word1.length; i++) {
    if (letterObj1[word1[i]] === undefined) {
      letterObj1[word1[i]] = 1;
    } else {
      letterObj1[word1[i]]++;
    }
    if (letterObj2[word2[i]] === undefined) {
      letterObj2[word2[i]] = 1;
    } else {
      letterObj2[word2[i]]++;
    }
  }

  // console.log("letterObj1:", letterObj1);
  // console.log("letterObj2:", letterObj2);

  let ValArr1: Array<number> = [];
  let ValArr2: Array<number> = [];
  let LetArr1: Array<string> = [];
  let LetArr2: Array<string> = [];

  for (let key in letterObj1) {
    // console.log("key:", key, letterObj1[key]);
    ValArr1.push(letterObj1[key]);
    LetArr1.push(key);
  }
  ValArr1.sort();
  LetArr1.sort();
  // console.log("ValArr1:", ValArr1, "LetArr1:", LetArr1);
  
  for (let key in letterObj2) {
    // console.log("key:", key, letterObj2[key]);
    ValArr2.push(letterObj2[key]);
    LetArr2.push(key);
  }
  ValArr2.sort();
  LetArr2.sort();
  // console.log("ValArr2:", ValArr2, "LetArr2:", LetArr2);

    // return true if equal, false if not equal. array or string comparison?
    for (let i = 0; i < ValArr1.length; i++) {
      if (ValArr1[i] !== ValArr2[i] || LetArr1[i] !== LetArr2[i]) {
        return false;
      }
    }
    return true;

    // older code than 20250318

  // create object of letter counts that occur in both diffs
  // let letterObj: any = {};

  for (let char of word1) {
    // console.log("char:", char);
    if (letterObj1[char] === undefined) {
      letterObj1[char] = 1;
    } else {
      letterObj1[char]++;
    }
  }
  // console.log(letterObj)

  let arr1: Array<number> = [];

  for (let key in letterObj1) {
    console.log("key:", key, letterObj1[key])
    arr1.push(letterObj1[key])
  }
  arr1.sort();
  // console.log(arr1);


  // sort the values of these counts and they should be the same. eg 1, 3, 5 works with 5, 1, 3

  // let letterObj2: any = {};

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

  // for (const [key, value] of Object.entries(letterObj2)) {
  //   console.log("key:", key);
  //   letterArr2.push(key)
  //   arr2.push(value)
  // }
  arr2.sort();
  letterArr2.sort();
  // console.log(arr2);
  console.log("letterArr2:", letterArr2)

  // return true if equal, false if not equal. array or string comparison?
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

console.log(closeStrings("abbcb", "baaca"));
