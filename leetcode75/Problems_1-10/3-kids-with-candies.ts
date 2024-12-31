function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let greatestArray: Array<boolean> = [];
  let max: number = 0;

  // get max
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > max) {
      max = candies[i];
    }
  }

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      greatestArray.push(true);
    } else {
      greatestArray.push(false);
    }
  }

  return greatestArray;
}

console.log(kidsWithCandies([2,3,5,1,3], 3));