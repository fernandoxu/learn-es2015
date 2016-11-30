'use strict';

// 解构赋值：变量的批量赋值
// let arr = [1, 2, 3];
let arr = [1, , 3];

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
let [a, b, c] = arr; //解构赋值写法
console.log(a, b, c);

let arr2 = [1, [2.1, 2.2], 3];
let [, [, t]] = arr2;
console.log(t);

let [e, [, f1], g] = arr2;
console.log(e, f1, g);

// 不定参数
// ... 拓展运算符
let arr3 = [1, 2, 3, 4, 5];
let [a1, b1, ...other] = arr3;
console.log(a1, b1, other);
// other变量为一个数组[3,4,5]
// ...拓展运算符只能放在最后

// *越界问题
let arr4 = [1, 2];
let [c1, d1, e1] = arr4;
console.log(c1, d1, e1); //1,2,undefined
