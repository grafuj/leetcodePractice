"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function largestAltitude(gain) {
    let absoluteAtltitude = 0;
    let maxAlt = 0;
    for (let number of gain) {
        absoluteAtltitude += number;
        if (absoluteAtltitude > maxAlt) {
            maxAlt = absoluteAtltitude;
        }
    }
    return maxAlt;
}
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
