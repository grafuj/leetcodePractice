function maxOperations(nums: number[], k: number): number {
  let sortedNums: Array<number> = nums.sort();
  let firstIndex: number = 0;
  let secondIndex: number = nums.length - 1;
  let halfLength: number = nums.length / 2;
  let pairsCounter: number = 0;

  for (let i = 0; i < halfLength; i++) {
    console.log(
      "sortedNums: ",
      sortedNums,
      "firstIndex: ",
      firstIndex,
      "nums[firstIndex]: ",
      sortedNums[firstIndex],
      "+",
      "secondIndex: ",
      secondIndex,
      "nums[secondIndex]: ",
      sortedNums[secondIndex],
      "=",
      sortedNums[firstIndex] + sortedNums[secondIndex],
      " === ",
      k
    );
    if (sortedNums[firstIndex] + sortedNums[secondIndex] === k) {
      console.log("equal");
      sortedNums.splice(firstIndex, 1);
      console.log("1st gone: ", sortedNums);
      secondIndex--;
      sortedNums.splice(secondIndex, 1);
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
const ex1: Array<number> = [3, 1, 2, 4, 3];
const int: number = 6;
console.log(maxOperations(ex1, int));
