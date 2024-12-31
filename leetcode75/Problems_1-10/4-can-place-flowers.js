function canPlaceFlowers(flowerbed, n) {
    var count = 0;
    for (var i = 0; i < flowerbed.length; i++) {
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
var bed2 = [0, 0, 1, 0, 1];
console.log(canPlaceFlowers(bed2, 1));
