function increasingTriplet(nums: number[]): boolean {
  let smaller: boolean = false;
  let greater: boolean = false;
  for (let numsIndex = 0; numsIndex < nums.length; numsIndex++) {
    let lowerElementsCount: number = numsIndex;
    let upperElementsCount: number = nums.length - numsIndex - 1;
    let lowerElemsArray: Array<number> = nums.slice(0, numsIndex);
    let upperElemsArray: Array<number> = nums.slice(numsIndex + 1, nums.length);

    // break exits the for loop, continue ends the current execution/iteration

    console.log(
      "comparison: ",
      lowerElementsCount,
      lowerElemsArray,
      "index: ",
      numsIndex,
      "elem: ",
      nums[numsIndex],
      "upper: ",
      upperElementsCount,
      upperElemsArray
    );
    // get lower elements array, iterate through
    if (lowerElemsArray.length > 0) {
      for (
        let lowerElemsIndex = 0;
        lowerElemsIndex < lowerElementsCount;
        lowerElemsIndex++
      ) {
        if (smaller) {
          break;
        }
        console.log(
          "lower elem comparison: ",
          lowerElemsArray[lowerElemsIndex],
          " < ",
          nums[numsIndex],
          lowerElemsArray[lowerElemsIndex] < nums[numsIndex]
        );
        if (lowerElemsArray[lowerElemsIndex] < nums[numsIndex]) {
          smaller = true;
        }
      }
    }

    // get upper elements array, iterate through
    console.log("up check: ", upperElemsArray.length > 0);
    if (upperElemsArray.length > 0) {
      for (
        let upperElemsIndex = 0;
        upperElemsIndex < upperElementsCount;
        upperElemsIndex++
      ) {
        if (greater) {
          break;
        }
        console.log(
          "upper elem comparison: ",
          upperElemsArray[upperElemsIndex],
          " > ",
          nums[numsIndex],
          upperElemsArray[upperElemsIndex] > nums[numsIndex]
        );
        if (upperElemsArray[upperElemsIndex] > nums[numsIndex]) {
          greater = true;
        }
      }
    }
  }
  console.log("values smol & gre: ", smaller, greater);
  if (smaller && greater) {
    return true;
  } else {
    return false;
  }
}

let ex1: Array<number> = [1, 2, 3, 4, 5];
// let ex2: Array<number> = [5, 4, 3, 2, 1];
// let ex3: Array<number> = [2, 1, 5, 0, 4, 6];

console.log(increasingTriplet(ex1));
// console.log(increasingTriplet(ex2));
// console.log(increasingTriplet(ex3));
