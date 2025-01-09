function maxOperations(nums, k) {
    var sortedNums = nums.sort();
    var firstIndex = 0;
    var secondIndex = nums.length;
    var halfLength = nums.length / 2;
    var pairsCounter = 0;
    for (var i = 0; i < halfLength; i++) {
        console.log("sortedNums: ", sortedNums);
        if (sortedNums[firstIndex] + sortedNums[secondIndex] === k) {
            sortedNums.splice(firstIndex, 1);
            sortedNums.splice(secondIndex, 1);
            pairsCounter++;
            i--;
        }
        else if (sortedNums[firstIndex] + sortedNums[secondIndex] > k) {
            secondIndex--;
        }
        else if (sortedNums[firstIndex] + sortedNums[secondIndex] < k) {
            firstIndex++;
        }
    }
    return pairsCounter;
}
;
