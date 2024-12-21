function kidsWithCandies(candies, extraCandies) {
    var greatestArray = [];
    var max = 0;
    // get max
    for (var i = 0; i < candies.length; i++) {
        if (candies[i] > max) {
            max = candies[i];
        }
    }
    for (var i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            greatestArray.push(true);
        }
        else {
            greatestArray.push(false);
        }
    }
    return greatestArray;
}
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
