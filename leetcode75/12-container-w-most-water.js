"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maxArea(height) {
    let maxVol = 0;
    let heightsLength = height.length;
    for (let first = 0; first < heightsLength; first++) {
        for (let second = 0; second < heightsLength; second++) {
            let columnMin = 0;
            if (height[first] >= height[second]) {
                columnMin = height[second];
            }
            else {
                columnMin = height[first];
            }
            // console.log(
            //   "height[first]: ",
            //   height[first],
            //   "height[second]: ",
            //   height[second],
            //   "colmin: ",
            //   columnMin
            // );
            // console.log(
            //   "second: ",
            //   second,
            //   "first: ",
            //   first,
            //   "2nd - 1st: ",
            //   Math.abs(second - first)
            // );
            let currentVol = Math.abs(second - first) * columnMin;
            if (currentVol < 0) {
                currentVol = currentVol * -1;
            }
            // console.log("currentVol: ", currentVol);
            if (currentVol > maxVol) {
                maxVol = currentVol;
            }
        }
    }
    return maxVol;
}
let ex1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(ex1));
