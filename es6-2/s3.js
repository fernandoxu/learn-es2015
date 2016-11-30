'use strict';

// 字符串
let str = 'JavaScript is the best language!';

let isFind = str.includes('S', 5); //新的方法
let index = str.indexOf('S', 5);
console.log(isFind, index);

let [isStartWith, isEndWith] = [str.startsWith('S', 4), str.endsWith('!')];

console.log(isStartWith, isEndWith, str.endsWith('s', 13));
