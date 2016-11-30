'use strict';

// 解构赋值：对象的批量赋值
// 把右侧的数据类型赋值到左侧构造的相似的数据类型中

let obj = {
    a: 'a',
    b: 'b',
    c: 'c',
    arr: [1, 2, 3]
};
// let {
//     x,
//     y,
//     z
// } = obj;
// console.log(x,y,z); //undefind
let {
    a,
    b,
    c,
} = obj;
console.log(a, b, c);

let {
    a: mya,
    b: myb,
    c: myc,
    arr: [, , x]
} = obj;
console.log(mya, myb, myc, x);
