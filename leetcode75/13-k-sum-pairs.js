function maxOperations(nums, k) {
    var sortedNums = nums.sort();
    var firstIndex = 0;
    var secondIndex = nums.length - 1;
    var halfLength = nums.length / 2;
    var pairsCounter = 0;
    for (var i = 0; i < halfLength; i++) {
        console.log("sortedNums: ", sortedNums, "firstIndex: ", firstIndex, "nums[firstIndex]: ", sortedNums[firstIndex], "+", "secondIndex: ", secondIndex, "nums[secondIndex]: ", sortedNums[secondIndex], "=", sortedNums[firstIndex] + sortedNums[secondIndex], " === ", k);
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
var int = 6;
console.log(maxOperations(ex1, int));
