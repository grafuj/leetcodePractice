function largestAltitude(gain: number[]): number {
  let absoluteAtltitude: number = 0;
  let maxAlt: number = 0;
  for (let number of gain) {
    absoluteAtltitude += number;
    if (absoluteAtltitude > maxAlt) {
      maxAlt = absoluteAtltitude;
    }
  }
  return maxAlt;
}

console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
