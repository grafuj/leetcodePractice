function longestSubarray(nums: number[]): number {
  let numsLength: number = nums.length;
  
  let maxUndeleted: number = 0;
  let currentCount: number = 0;
  for(let i = 0; i < numsLength; i++){
    if(nums[i] === 0){
      currentCount = 0;
    } else {
      // is 1
      currentCount++;
      if(currentCount > maxUndeleted){
        maxUndeleted = currentCount;
      }
    }
  }
  return maxUndeleted;
};