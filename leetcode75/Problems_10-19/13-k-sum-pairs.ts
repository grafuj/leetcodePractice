function maxOperations(nums: number[], k: number): number {
  let sortedNums: Array<number> = nums.sort((a, b) => {
    return a - b;
  });
  let firstIndex: number = 0;
  let secondIndex: number = nums.length - 1;
  let numsLength: number = nums.length;
  let pairsCounter: number = 0;

  for (let i = 0; i < numsLength; i++) {
    console.log(
      "sortedNums:",
      sortedNums,
      "firstIndex:",
      firstIndex,
      "nums[firstIndex]:",
      sortedNums[firstIndex],
      "secondIndex:",
      secondIndex,
      "nums[secondIndex]:",
      sortedNums[secondIndex],
      sortedNums[firstIndex],
      "+",
      sortedNums[secondIndex],
      "=",
      sortedNums[firstIndex] + sortedNums[secondIndex],
      "===",
      k
    );
    if (
      firstIndex === secondIndex ||
      sortedNums.length === 1 ||
      firstIndex > numsLength - 1 ||
      secondIndex < 1
    ) {
      break;
    }
    if (sortedNums[firstIndex] + sortedNums[secondIndex] === k) {
      console.log("equal");
      sortedNums.splice(firstIndex, 1);
      console.log("1st gone: ", sortedNums);
      secondIndex--;
      sortedNums.splice(secondIndex, 1);
      // decrement each time an element is removed to keep it in the same spot
      secondIndex--;
      console.log("2nd gone: ", sortedNums);
      pairsCounter++;
      i--;
    } else if (sortedNums[firstIndex] + sortedNums[secondIndex] > k) {
      console.log("over");
      secondIndex--;
    } else if (sortedNums[firstIndex] + sortedNums[secondIndex] < k) {
      console.log("under");
      firstIndex++;
    }
  }
  return pairsCounter;
}
// const ex1: Array<number> = [3, 1, 2, 4, 3];
// const ex2: Array<number> = [3, 1, 3, 4, 3];
const ex3: Array<number> = [
  4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4,
];
// const int6: number = 6;
const int2: number = 2;
// console.log(maxOperations(ex1, int6));
// console.log(maxOperations(ex2, int6));
console.log(maxOperations(ex3, int2));
