'use strict';
// includes
let arr = [1, 'a', '1', 23, NaN, Infinity];

let res = arr.indexOf(NaN);
// if (res > 1) {
//     console.log(false);
// }

let res2 = arr.includes(NaN);
console.log(res, res2);
//indexOf无法查找NaN,返回的依旧是-1;includes解决了这问题
