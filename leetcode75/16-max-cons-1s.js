function longestOnes(nums, k) {
    function countOnes(numbers) {
        var numbersLength = numbers.length;
        var max = 0;
        var count = 0;
        for (var i = 0; i < numbersLength; i++) {
            if (numbers[i] === 1) {
                count++;
            }
            else {
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
    var maxWithFlip = 0;
    return maxWithFlip;
}
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
