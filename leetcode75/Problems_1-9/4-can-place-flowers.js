"use strict";
// is my code is more complete than what they expect:
// input: flowerbed = [0,0,1,0,0]
// n = 1
Object.defineProperty(exports, "__esModule", { value: true });
// flowerbed:  [ 1, 0, 1, 0, 0 ] count:  1
// flowerbed:  [ 1, 0, 1, 0, 0 ] count:  1
// flowerbed:  [ 1, 0, 1, 0, 0 ] count:  1
// flowerbed:  [ 1, 0, 1, 0, 0 ] count:  1
// flowerbed:  [ 1, 0, 1, 0, 1 ] count:  2
// count:  2 n:  1 count === n:  false
// Output false
// Expected true
// How is it supposed to be 1? is it the start or the end?
function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 &&
            flowerbed[i - 1] !== 1 &&
            flowerbed[i + 1] !== 1) {
            flowerbed[i] = 1;
            count++;
        }
        console.log("flowerbed: ", flowerbed, "count: ", count);
    }
    console.log("count: ", count, "n: ", n, "count === n: ", count === n);
    if (count === n) {
        return true;
    }
    return false;
}
// const bed1: Array<number> = [1, 0, 0, 0, 0, 1];
// console.log(canPlaceFlowers(bed1, 2));
const bed2 = [0, 0, 1, 0, 1];
console.log(canPlaceFlowers(bed2, 1));
