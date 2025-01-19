function findMaxAverage(nums: number[], k: number): number {
  function avg(numberArray: Array<number>): number {
    let avg: number = 0;
    let sum: number = 0;
    let numsLength: number = numberArray.length;
    for (let i = 0; i < numsLength; i++) {
      sum = sum + numberArray[i];
    }
    avg = sum / numsLength;
    return avg;
  }
  let numsLength: number = nums.length;
  let subArrayOptionsCount: number = numsLength - k;
  let bestAverage: number = 0;

  if (numsLength < 2) {
    return nums[0];
  }

  for (let i = 0; i < subArrayOptionsCount; i++) {
    let subArray: Array<number> = nums.slice(i, i + k);
    // console.log("subArray:", subArray);
    let average: number = avg(subArray);
    if (average > bestAverage) {
      bestAverage = average;
    }
  }
  return bestAverage;
}

// const ex1: Array<number> = [1,12,-5,-6, 50, 3];
const ex1: Array<number> = [5];
// console.log(findMaxAverage(ex1, 4));
console.log(findMaxAverage(ex1, 5));
