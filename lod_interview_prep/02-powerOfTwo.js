"use strict";
/*
Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2^x.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// using log
/*
function isPowerOfTwo(n: number): boolean {
  let isPowerOfTwo: boolean = false;
  let logged: number = 0;
  // we use Math.log2() to take a logarithm of base two
  logged = Math.log2(n);
  console.log("n: ", n, "logged: ", logged);
  if(logged % 1 !== 0){
    return false;
  }
  return true;

  // return isPowerOfTwo;
};
*/
// using recursion
function isPowerOfTwo(n) {
    if (n === 1) {
        return true;
    }
    else if (n % 1 !== 0) {
        return false;
    }
    else {
        return isPowerOfTwo(n / 2);
    }
    ;
}
;
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(8));
