function compress(chars: string[]): Array<string> {
  let myObj: any = {};

  if (chars.length === 1) {
    return chars;
  }

  for (let i = 0; i < chars.length; i++) {
    let char: string = chars[i];
    if (myObj[char] === undefined) {
      myObj[char] = 1;
    } else {
      myObj[char] = myObj[char] + 1;
    }
  }
  console.log("char: ", myObj);
  let returnArray: Array<string> = [];
  for (let letter in myObj) {
    returnArray.push(letter);
    returnArray.push(myObj[letter].toString());
  }
  console.log("return array: ", returnArray);
  return returnArray;
}

let exArString1: Array<string> = ["a", "a", "b", "b", "c", "c", "c"];

console.log(compress(exArString1));
