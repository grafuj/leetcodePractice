function longestSubarray(nums: number[]): number {
  let numsLength: number = nums.length;

  let maxUndeleted: number = 0;
  let currentCount: number = 0;
  let countCouldBe: number = 0;
  let postFlipCount: number = 0;
  for (let i = 0; i < numsLength; i++) {
    if (nums[i] === 0) {
      countCouldBe = currentCount;
      currentCount = 0;
    } else {
      // is 1
      currentCount++;
      console.log("currentCount:", currentCount, "postFlipCount:", postFlipCount, "i:", i, "nums[i]:", nums[i], "countCouldBe:", countCouldBe)
      if (nums[i + 1] === 0) {
        postFlipCount = currentCount + countCouldBe;
      }
      if (currentCount > maxUndeleted) {
        maxUndeleted = currentCount;
      }
    }
  }
  if (maxUndeleted > postFlipCount) {
    return maxUndeleted;
  } else {
    return postFlipCount;
  }
}

const ex1: Array<number> = [0, 1, 1, 1, 0, 1, 1, 0, 1];
console.log(longestSubarray(ex1));
console.log(longestSubarray([1,1,0,1]));
