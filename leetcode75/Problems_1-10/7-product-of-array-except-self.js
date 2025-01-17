function productExceptSelf(nums) {
    let myArr = [];
    let maxProd = 1;
    for (let num of nums) {
        maxProd = maxProd * num;
    }
    console.log("maxprod: ", maxProd);
    for (let i = 0; i < nums.length; i++) {
        myArr.push(maxProd / nums[i]);
    }
    return myArr;
}
let exArray = [1, 2, 3, 4];
console.log("prod(ex1): ", productExceptSelf(exArray));
export {};
