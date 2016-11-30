'use strict';
// 数组
// Array.from()

// 把数组转化为类数组
//也可以赋值数组
// 复制有深拷贝和浅拷贝
let arr = [1, 2, 3];

let arr2 = Array.from(arr);
console.log(arr, arr2);
// 常用例子:
// es5
// var args = [].slice.call(arguments);
// var imgs = [].slice.call(document.querySelectorAll('img'));

// es6
// let args1 = Array.from(arguments);
// let imgs1 = Array.from(document.querySelectorAll('img'));

// 创建一个包含从0到99(n)的连续整数的数组
// es5
var arr1 = [];
for (var i = 0; i <= 99; i++) {
    arr.push(i);
}
// es6
let arr3 = Array.from({
    length: 100
}).map(function(item, index) {
    return index
});
