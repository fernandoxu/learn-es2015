'use strict';

//Set实现js中的集合运算
// 集合运算有三种 并集、交集、差集
let s1 = new Set([1, 3, 5, 7]);
let s2 = new Set([1, 2, 4, 5, 6, 8]);

//并集
let sb = new Set([...s1, ...s2]);
console.log(sb);

//交集

let sj = new Set([...s1].filter(item => s2.has(item)));
console.log(sj);

//差集

let sc = new Set([...s1].filter(item => !s2.has(item)));
let sc2 = new Set([...s2].filter(item => !s1.has(item)));

console.log(sc);

// WeakSet()
