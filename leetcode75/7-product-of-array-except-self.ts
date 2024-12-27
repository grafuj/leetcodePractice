function productExceptSelf(nums: number[]): number[] {
  let myArr: Array<number> = [];
  let maxProd: number = 1;

  for (let num of nums) {
    maxProd = maxProd * num;
  }

  console.log("maxprod: ", maxProd);

  for (let i = 0; i < nums.length; i++) {
    myArr.push(maxProd / nums[i]);
  }

  return myArr;
}

let ex1: Array<number> = [1, 2, 3, 4];

console.log("prod(ex1): ", productExceptSelf(ex1));
