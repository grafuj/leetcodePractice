function compress(chars) {
    var myObj = {};
    if (chars.length === 1) {
        return chars;
    }
    for (var i = 0; i < chars.length; i++) {
        var char = chars[i];
        // console.log(myObj[char]);
        if (myObj[char] === undefined) {
            myObj[char] = 1;
        }
        else {
            myObj[char] = myObj[char] + 1;
        }
        // console.log(myObj[char]);
    }
    console.log("char: ", myObj, "length: ", myObj.length);
    var counter = 0;
    var returnArray = [];
    for (var letter in myObj) {
        returnArray.push(letter);
        returnArray.push(myObj[letter].toString());
        counter = counter + 2;
        console.log("letter: ", letter, counter);
    }
    console.log("return array: ", returnArray);
    return returnArray;
}
var exArString1 = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(exArString1));
