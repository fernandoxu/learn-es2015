'use strict';

// 拓展运算符

function add(a, ...arg) {
    // debugger;
    let res = 0;
    res += a;
    for (let i = 0; i < arg.length; i++) {
        res += arg[i];
    }
    return res;
}

let res = add(1, 3, 4, 5);


for (let i = arr.length - 1; i >= 0; i--) {
    res += arg[i];
} //for循环的最优写法

let arr = [3, 62, 9, 5];
// let m = Math.max.apply(null, arr);
let m = Math.max(...arr);
console.log(m);
