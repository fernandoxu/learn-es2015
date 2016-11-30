'use strict';

//模板字符串

let htmlStr = '<div>123\
                </div>\
                ';
//插入的可以是表达式
let a = 999;
let es6Str = `123${a}456`;
console.log(es6Str);

function calc(x, y) {
    return x + y;
}
let num = `1+2 = ${calc(1,2)}`;
console.log(num, '============='); //log可以像这样打印其他的东西

let isGirl = `Sophia is a ${true ? 'girl':'boy'}`;
console.log(isGirl);

let x = '9';
let y = '7';
let str = tagTemplet `12${x}3${y}`;

function tagTemplet(strArr, ...other) {
    console.log(strArr, other);
    let res = parseInt(strArr[0]) + parseInt(other[1]);
    return res;
}
console.log(str);
