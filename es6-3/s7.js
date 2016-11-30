'use strict';
// key
let arr = [1, 'a', '1', 23, NaN, Infinity];
let arrKeys = arr.keys();
let arrVal = arr.values();//chrome未实现
let arrEn = arr.entries();
console.log(arrKeys);
for (let item of arrKeys) {
    console.log(item);
}
for (let item of arrVal) {
    console.log(item);
}
for (let item of arrEn) {
    console.log(item);
}

// 看 迭代器
