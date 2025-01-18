function pivotIndex(nums: number[]): number {
  let numsLength: number = nums.length;
  let pivotIndex: number = -1;
  let sum: number = 0;
  let leftSumArray: Array<number> = [];
  let rightSumArray: Array<number> = [];

  for (let elem of nums) {
    sum += elem;
    leftSumArray.push(sum);
    console.log(leftSumArray);
  }
  sum = 0;
  for (let i = numsLength - 1; i > -1; i--) {
    sum += nums[i];
    rightSumArray.push(sum);
    console.log(rightSumArray);
  }

  // console.log(leftSumArray, rightSumArray);
  let reverseIndex: number = 0;
  for (let i = 0; i < numsLength - 1; i++) {
    if (leftSumArray[i+1] === rightSumArray[i]) {
      return i+2;
    }
    // reverseIndex++;
  }
  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
