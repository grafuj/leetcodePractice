//https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75
function reverseWords(s) {
    var trimmed = "";
    // remove spaces
    trimmed = s.trim();
    var split = trimmed.split(" ");
    console.log("split: ", split);
    var reversed = "";
    // let reversed: Array<string> = trimmed;
    // flip order
    for (var i = split.length - 1; i > -1; i--) {
        console.log("split[i]: ", split[i]);
        console.log("its a space!", split[i], "length", split[i].length);
        // if (split[i].length === 0) {
        //   console.log("true")
        // }
        if (split[i].length !== 0) {
            // add word
            reversed += split[i];
            // add spaces between words
            if (i > 0) {
                // don't add the space at the end
                reversed += " ";
            }
        }
        // console.log(reversed);
    }
    return reversed;
}
var bigString = "  hello world ";
var bigString2 = "  Where do    I go   from here? ";
// console.log(reverseWords(bigString));
console.log(reverseWords(bigString2));
