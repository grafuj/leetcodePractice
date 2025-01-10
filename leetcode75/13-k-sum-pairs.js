function maxOperations(nums, k) {
    var sortedNums = nums.sort();
    var firstIndex = 0;
    var secondIndex = nums.length - 1;
    var numsLength = nums.length;
    var pairsCounter = 0;
    for (var i = 0; i < numsLength; i++) {
        console.log("sortedNums:", sortedNums, "firstIndex:", firstIndex, "nums[firstIndex]:", sortedNums[firstIndex], "secondIndex:", secondIndex, "nums[secondIndex]:", sortedNums[secondIndex], sortedNums[firstIndex], "+", sortedNums[secondIndex], "=", sortedNums[firstIndex] + sortedNums[secondIndex], "===", k);
        if (firstIndex === secondIndex ||
            sortedNums.length === 1 ||
            firstIndex > numsLength - 1 ||
            secondIndex < 1) {
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
        }
        else if (sortedNums[firstIndex] + sortedNums[secondIndex] > k) {
            console.log("over");
            secondIndex--;
        }
        else if (sortedNums[firstIndex] + sortedNums[secondIndex] < k) {
            console.log("under");
            firstIndex++;
        }
    }
    return pairsCounter;
}
var ex1 = [3, 1, 2, 4, 3];
var ex2 = [3, 1, 3, 4, 3];
var ex3 = [
    4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4,
];
var int6 = 6;
var int2 = 2;
// console.log(maxOperations(ex1, int6));
// console.log(maxOperations(ex2, int6));
console.log(maxOperations(ex3, int2));
