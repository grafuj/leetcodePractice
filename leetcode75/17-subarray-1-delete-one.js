function longestSubarray(nums) {
    let numsLength = nums.length;
    let maxUndeleted = 0;
    let currentCount = 0;
    for (let i = 0; i < numsLength; i++) {
        if (nums[i] === 0) {
            currentCount = 0;
        }
        else {
            // is 1
            currentCount++;
            if (currentCount > maxUndeleted) {
                maxUndeleted = currentCount;
            }
        }
    }
    return maxUndeleted;
}
;
export {};
