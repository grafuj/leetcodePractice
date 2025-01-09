function maxArea(height) {
    var maxVol = 0;
    var heightsLength = height.length;
    for (var first = 0; first < heightsLength; first++) {
        for (var second = 0; second < heightsLength; second++) {
            var columnMin = 0;
            if (height[first] >= height[second]) {
                columnMin = height[second];
            }
            else {
                columnMin = height[first];
            }
            console.log("height[first]: ", height[first], "height[second]: ", height[second], "colmin: ", columnMin);
            console.log("second: ", second, "first: ", first, "2nd - 1st: ", Math.abs(second - first));
            var currentVol = Math.abs(second - first) * columnMin;
            if (currentVol < 0) {
                currentVol = currentVol * -1;
            }
            console.log("currentVol: ", currentVol);
            if (currentVol > maxVol) {
                maxVol = currentVol;
            }
        }
    }
    return maxVol;
}
var ex1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(ex1));
