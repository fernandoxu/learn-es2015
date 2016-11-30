'use strict';
//Array.prototype.fill

let arr = [1, 2, 3, 4, 5];
arr.fill(9, 1, 3);
//要填充的元素区间是 [start, end) , 一个半开半闭区间(不包括end);
console.log(arr);
