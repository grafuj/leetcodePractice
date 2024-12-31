/**
 Do not return anything, modify nums in-place instead.
 Input: nums = [0,1,0,3,12]
 Output: [1,3,12,0,0]
 */
function moveZeroes(nums: number[]): void {
  let zeroCount: number = 0;
  for (let i = 0; i < nums.length; i++) {
    // console.log("numsBefore: ", nums, "nums[i]: ", nums[i]);
    if (nums[i] === 0) {
      zeroCount++;
      nums.splice(i, 1);
      i--;
    }
    // console.log("numsAfter: ", nums, "nums[i]: ", nums[i]);
  }

  for (let i = 0; i < zeroCount; i++) {
    console.log("zeroCountBefore: ", zeroCount, "nums: ", nums, "i: ", i);
    nums.push(0);
    console.log("zeroCountAfter: ", zeroCount, "nums: ", nums, "i: ", i);
  }
}

let ex1: Array<number> = [0, 1, 0, 3, 12];
let ex2: Array<number> = [0, 0, 1];

console.log(moveZeroes(ex1));
console.log(moveZeroes(ex2));
