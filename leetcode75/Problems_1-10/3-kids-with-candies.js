function kidsWithCandies(candies, extraCandies) {
    let greatestArray = [];
    let max = 0;
    // get max
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > max) {
            max = candies[i];
        }
    }
    for (let i = 0; i < candies.length; i++) {
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
export {};
