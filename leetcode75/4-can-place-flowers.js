function canPlaceFlowers(flowerbed, n) {
    var count = 0;
    for (var i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 &&
            flowerbed[i - 1] === 0 &&
            flowerbed[i + 1] === 0) {
            flowerbed[i] = 1;
            count++;
        }
        console.log("flowerbed: ", flowerbed, "count: ", count);
    }
    if (count === n) {
        return true;
    }
    return false;
}
var bed1 = [1, 0, 0, 0, 0, 1];
console.log(canPlaceFlowers(bed1, 2));
