function increasingTriplet(nums: number[]): boolean {
  let smaller: boolean = false;
  let greater: boolean = false;
  for (let numsElem = 0; numsElem < nums.length; numsElem++) {
    let lowerElementsCount: number = numsElem + 1;
    let upperElementsCount: number = nums.length - numsElem + 1;

    console.log("comparison: ", lowerElementsCount, upperElementsCount);
    // get lower elements array, iterate through
    for (
      let lowerElemIndex = 0;
      lowerElemIndex < lowerElementsCount;
      lowerElemIndex++
    ) {}

    if (
      nums[numsElem - 1] < nums[numsElem] &&
      typeof nums[i - 1] === "number" &&
      nums[numsElem + 1] > nums[numsElem] &&
      typeof nums[numsElem + 1] === "number"
    ) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}

let ex1: Array<number> = [1, 2, 3, 4, 5];
let ex2: Array<number> = [5, 4, 3, 2, 1];
let ex3: Array<number> = [2, 1, 5, 0, 4, 6];

console.log(increasingTriplet(ex1));
console.log(increasingTriplet(ex2));
console.log(increasingTriplet(ex3));
