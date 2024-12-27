function increasingTriplet(nums) {
    var smaller = false;
    var greater = false;
    for (var numsIndex = 0; numsIndex < nums.length; numsIndex++) {
        var lowerElementsCount = numsIndex;
        var upperElementsCount = nums.length - numsIndex - 1;
        var lowerElemsArray = nums.slice(0, numsIndex);
        var upperElemsArray = nums.slice(numsIndex + 1, nums.length);
        // break exits the for loop, continue ends the current execution/iteration
        console.log("comparison: ", lowerElementsCount, lowerElemsArray, "index: ", numsIndex, "elem: ", nums[numsIndex], "upper: ", upperElementsCount, upperElemsArray);
        // get lower elements array, iterate through
        if (lowerElemsArray.length > 0) {
            for (var lowerElemsIndex = 0; lowerElemsIndex < lowerElementsCount; lowerElemsIndex++) {
                if (smaller) {
                    break;
                }
                console.log("lower elem comparison: ", lowerElemsArray[lowerElemsIndex], " < ", nums[numsIndex], lowerElemsArray[lowerElemsIndex] < nums[numsIndex]);
                if (lowerElemsArray[lowerElemsIndex] < nums[numsIndex]) {
                    smaller = true;
                }
            }
        }
        // get upper elements array, iterate through
        console.log("up check: ", upperElemsArray.length > 0);
        if (upperElemsArray.length > 0) {
            for (var upperElemsIndex = 0; upperElemsIndex < upperElementsCount; upperElemsIndex++) {
                if (greater) {
                    break;
                }
                console.log("upper elem comparison: ", upperElemsArray[upperElemsIndex], " > ", nums[numsIndex], upperElemsArray[upperElemsIndex] > nums[numsIndex]);
                if (upperElemsArray[upperElemsIndex] > nums[numsIndex]) {
                    greater = true;
                }
            }
        }
    }
    console.log("values smol & gre: ", smaller, greater);
    if (smaller && greater) {
        return true;
    }
    else {
        return false;
    }
}
var ex1 = [1, 2, 3, 4, 5];
// let ex2: Array<number> = [5, 4, 3, 2, 1];
// let ex3: Array<number> = [2, 1, 5, 0, 4, 6];
console.log(increasingTriplet(ex1));
// console.log(increasingTriplet(ex2));
// console.log(increasingTriplet(ex3));
