"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function uniqueOccurrences(arr) {
    const myObj = {};
    // const arrLength: number = arr.length;
    for (let num of arr) {
        if (myObj[num] === undefined) {
            myObj[num] = 1;
        }
        else {
            myObj[num]++;
        }
    }
    // console.log("myObj:", myObj);
    for (let key in myObj) {
        for (let key2 in myObj) {
            // console.log(
            //   "key:",
            //   key,
            //   "myObj.key",
            //   myObj[key],
            //   "key2:",
            //   key2,
            //   "myObj.key2",
            //   myObj[key2]
            // );
            if (myObj[key] === myObj[key2] && key !== key2) {
                // console.log("same lol:", key, "has same count as", key2);
                return false;
            }
        }
    }
    return true;
}
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3, 2]));
