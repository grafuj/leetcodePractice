function findMaxAverage(nums, k) {
    function avg(numberArray) {
        var avg = 0;
        var sum = 0;
        var numsLength = numberArray.length;
        for (var i = 0; i < numsLength; i++) {
            sum = sum + numberArray[i];
        }
        avg = sum / numsLength;
        return avg;
    }
    var numsLength = nums.length;
    var subArrayOptionsCount = numsLength - k;
    var bestAverage = 0;
    for (var i = 0; i < subArrayOptionsCount; i++) {
        var subArray = nums.slice(i, i + k);
        console.log("subArray:", subArray);
        var average = avg(subArray);
        if (average > bestAverage) {
            bestAverage = average;
        }
    }
    return bestAverage;
}
;
var ex1 = [1, 12, -5, -6, 50, 3];
console.log(findMaxAverage(ex1, 4));
