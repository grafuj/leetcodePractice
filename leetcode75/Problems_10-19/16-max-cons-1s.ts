function longestOnes(nums: number[], k: number): number {
  function countOnes(numbers: Array<number>): number[] {
    let numbersLength: number = numbers.length;
    let max: number = 0;
    let position: number = 0;
    let count: number = 0;
    for (let i = 0; i < numbersLength; i++) {
      if (numbers[i] === 1) {
        count++;
      } else {
        // its zero
        count = 0;
      }
      if (count > max) {
        max = count;
        position = i - count;
      }
    }
    return [max, position];
  }

  
  console.log(countOnes(nums));
  let maxWithFlip: number = 0;
  let flippedCount: number = 0;
  let numsLength: number = nums.length;
  // edge case no 0s
  if(nums.indexOf(0) === -1) {
    return numsLength;
  }

  // get current max 1 count:
  let tuple: Array<number> = countOnes(nums);

  // use position to check before and after 
  console.log(1,2,3,4,5,6,7,8,9,10,11)
  console.log(nums)
  console.log(tuple)

  for(let i = 0; i < 2*k; i ++){
  
  }

  
  return maxWithFlip;
}

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
