function longestOnes(nums: number[], k: number): number {
  function countOnes(numbers: Array<number>): number {
    let numbersLength: number = numbers.length;
    let max: number = 0;
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
      }
    }
    return max;
  }

  console.log(countOnes(nums));
  let maxWithFlip: number = 0;
  return maxWithFlip;
}

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
