function compress(chars) {
    let myObj = {};
    if (chars.length === 1) {
        return chars;
    }
    // make a big object with kays as letters and values as count per letter
    for (let i = 0; i < chars.length; i++) {
        let char = chars[i];
        if (myObj[char] === undefined) {
            myObj[char] = 1;
        }
        else {
            myObj[char] = myObj[char] + 1;
        }
    }
    console.log("char: ", myObj);
    // interate through the object putting keys and values into an array
    let returnArray = [];
    for (let letter in myObj) {
        returnArray.push(letter);
        returnArray.push(myObj[letter].toString());
    }
    console.log("return array: ", returnArray);
    return returnArray;
}
let exArString1 = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(exArString1));
export {};
