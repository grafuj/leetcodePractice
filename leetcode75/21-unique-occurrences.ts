function uniqueOccurrences(arr: number[]): boolean {
  const myObj: any = {};
  const arrLength: number = arr.length;

  for (let num of arr) {
    if (myObj[num] === undefined) {
      myObj[num] = 1;
    } else {
      myObj[num]++;
    }
  }

  for(let key in myObj){
    console.log("key:", key)
  }
  return false;
  return true;
}

console.log(uniqueOccurrences([1,2,2,1,1,3]))