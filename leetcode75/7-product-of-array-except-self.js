function productExceptSelf(nums) {
    var myArr = [];
    var maxProd = 1;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        maxProd = maxProd * num;
    }
    console.log("maxprod: ", maxProd);
    for (var i = 0; i < nums.length; i++) {
        myArr.push(maxProd / nums[i]);
    }
    return myArr;
}
var ex1 = [1, 2, 3, 4];
console.log("prod(ex1): ", productExceptSelf(ex1));
