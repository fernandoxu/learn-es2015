'use strict';
// find findIndex

let arr = [1, 'a', '1', 23];
let res = arr.find((item, index, array) => {
    return item === '1';
});

let res2 = arr.findIndex((item, index, array) => {
    return item === '1';
});
console.log(res, typeof res);
console.log(res2, typeof res2);
