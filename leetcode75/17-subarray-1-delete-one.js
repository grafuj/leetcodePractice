"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function longestSubarray(nums) {
    let numsLength = nums.length;
    let maxUndeleted = 0;
    let currentCount = 0;
    let countCouldBe = 0;
    let postFlipCount = 0;
    for (let i = 0; i < numsLength; i++) {
        if (nums[i] === 0) {
            countCouldBe = currentCount;
            currentCount = 0;
        }
        else {
            // is 1
            currentCount++;
            console.log("currentCount:", currentCount, "postFlipCount:", postFlipCount, "i:", i, "nums[i]:", nums[i], "countCouldBe:", countCouldBe);
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
    }
    else {
        return postFlipCount;
    }
}
const ex1 = [0, 1, 1, 1, 0, 1, 1, 0, 1];
console.log(longestSubarray(ex1));
console.log(longestSubarray([1, 1, 0, 1]));
