function maxVowels(s: string, k: number): number {
  function countVowels(string: string): number {
    let count: number = 0;
    let stringLength: number = string.length;
    for (let i = 0; i < stringLength; i++) {
      if (
        string[i] === "a" ||
        string[i] === "e" ||
        string[i] === "i" ||
        string[i] === "o" ||
        string[i] === "u"
      ) {
        count++;
      }
    }
    return count;
  }

  let maxVowels: number = 0;
  let stringLength: number = s.length;
  let arrayOptions: number = stringLength - k;

  for (let i = 0; i < arrayOptions; i++) {
    let subString: string = s.slice(i, i + k);
    console.log("subString:", subString, "maxVowels:", maxVowels);
    let currentVowelCount: number = countVowels(subString);
    if(currentVowelCount > maxVowels){
      maxVowels = currentVowelCount;
    }

  }
  return maxVowels;
}

console.log(maxVowels("abciiidef", 3))