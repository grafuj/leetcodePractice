function findMaxAverage(nums, k) {
    function avg(numberArray) {
        let avg = 0;
        let sum = 0;
        let numsLength = numberArray.length;
        for (let i = 0; i < numsLength; i++) {
            sum = sum + numberArray[i];
        }
        avg = sum / numsLength;
        return avg;
    }
    let numsLength = nums.length;
    let subArrayOptionsCount = numsLength - k;
    let bestAverage = 0;
    if (numsLength < 2) {
        return nums[0];
    }
    for (let i = 0; i < subArrayOptionsCount; i++) {
        let subArray = nums.slice(i, i + k);
        // console.log("subArray:", subArray);
        let average = avg(subArray);
        if (average > bestAverage) {
            bestAverage = average;
        }
    }
    return bestAverage;
}
// const ex1: Array<number> = [1,12,-5,-6, 50, 3];
const ex1 = [5];
// console.log(findMaxAverage(ex1, 4));
console.log(findMaxAverage(ex1, 5));
export {};
