//https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75

function reverseWords(s: string): string {
  let trimmed: string = "";
  // remove spaces
  trimmed = s.trim();

  let reversed: Array<string> = trimmed.split(" ");
  // flip order
  for (let elem: string of reversed) {
    
  }

  return reversed;
}

const bigString: string = "  hello world ";
const bigString2: string = "  Where do I go from here? ";

console.log(reverseWords(bigString));
console.log(reverseWords(bigString2));
