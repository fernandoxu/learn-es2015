'use strict';

// 默认参数
// function add(x, y) {
//     if (typeof y === 'undefined') {
//         y = 0;
//     }
//     return x + y;
// }
// function add(x = 0, y = 0) {
//     return x + y;
// }
// let res = add(1);
// console.log(res);

let x = 1;
function add(x, y) {
    x = 3;
    return x + y;
}
let res = add(1, 2);
console.log(res);//5
