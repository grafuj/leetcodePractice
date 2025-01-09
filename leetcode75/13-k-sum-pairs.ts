function maxOperations(nums: number[], k: number): number {
  let sortedNums: Array<number> = nums.sort();
  let firstIndex: number = 0;
  let secondIndex: number = nums.length;
  let halfLength: number = nums.length / 2;
  let pairsCounter: number = 0;

  for (let i = 0; i < halfLength; i++) {
    console.log("sortedNums: ", sortedNums);
    if (sortedNums[firstIndex] + sortedNums[secondIndex] === k) {
      sortedNums.splice(firstIndex, 1);
      sortedNums.splice(secondIndex, 1);
      pairsCounter++;
      i--;
    } else if (sortedNums[firstIndex] + sortedNums[secondIndex] > k) {
      secondIndex--;
    } else if (sortedNums[firstIndex] + sortedNums[secondIndex] < k) {
      firstIndex++;
    }
  }
  return pairsCounter;
}
const ex1: Array<number> = [3, 1, 3, 4, 3];
const int: number = 6;
console.log(maxOperations(ex1, int));
