"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function increasingTriplet(nums) {
    let smaller = false;
    let greater = false;
    for (let numsIndex = 0; numsIndex < nums.length; numsIndex++) {
        let lowerElementsCount = numsIndex;
        let upperElementsCount = nums.length - numsIndex - 1;
        let lowerElemsArray = nums.slice(0, numsIndex);
        let upperElemsArray = nums.slice(numsIndex + 1, nums.length);
        if (smaller && greater) {
            break;
        }
        // break exits the for loop, continue ends the current execution/iteration
        // console.log(
        //   "comparison: ",
        //   "lowerArray: ",
        //   lowerElemsArray,
        //   "index: ",
        //   numsIndex,
        //   "elem: ",
        //   nums[numsIndex],
        //   "upperArray: ",
        //   upperElemsArray
        // );
        // get lower elements array, iterate through
        // console.log("low check: ", lowerElemsArray.length > 0);
        if (lowerElemsArray.length > 0 && upperElemsArray.length > 0) {
            for (let lowerElemsIndex = 0; lowerElemsIndex < lowerElementsCount; lowerElemsIndex++) {
                // console.log(
                //   "lower elem comparison: ",
                //   lowerElemsArray[lowerElemsIndex],
                //   " < ",
                //   nums[numsIndex],
                //   lowerElemsArray[lowerElemsIndex] < nums[numsIndex]
                // );
                if (lowerElemsArray[lowerElemsIndex] < nums[numsIndex]) {
                    for (let upperElemsIndex = 0; upperElemsIndex < upperElementsCount; upperElemsIndex++) {
                        if (greater) {
                            break;
                        }
                        // console.log(
                        //   "upper elem comparison: ",
                        //   upperElemsArray[upperElemsIndex],
                        //   " > ",
                        //   nums[numsIndex],
                        //   upperElemsArray[upperElemsIndex] > nums[numsIndex]
                        // );
                        if (upperElemsArray[upperElemsIndex] > nums[numsIndex]) {
                            greater = true;
                            smaller = true;
                        }
                    }
                }
            }
        }
    }
    // console.log("values smol & gre: ", smaller, greater);
    if (smaller && greater) {
        return true;
    }
    else {
        return false;
    }
}
let ex1 = [1, 2, 3, 4, 5];
let ex2 = [5, 4, 3, 2, 1];
let ex3 = [2, 1, 5, 0, 4, 6];
console.log(increasingTriplet(ex1));
console.log(increasingTriplet(ex2));
console.log(increasingTriplet(ex3));
