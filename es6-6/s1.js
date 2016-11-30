'use strict';
//set
// let obj = {
//     a: 'a'
// };
// let s = new Set([obj, obj, NaN, NaN, +0, -0, {}, {}, null, null, undefined, undefined])
    // console.log(s, s.size, s.length);

// s.add(null);
// s.delete(obj);
// s.has(obj);
// let res = s.clear();
// console.log(res);
// let ents = s.ent;
// console.log(ents);
//
// for (let item of ents) {
//     console.log(item);
// }

//拓展运算符...是使用了for of的遍历方式
// let set = new Set(['a', 'b', 'c']);
// let arr = [...set];
// console.log(arr);
// 数组去重
let arr = [1, 2, '2', 3, 4, 2, 1, 6, 3];

//1.把数组放到set里
// 2.set会自动去重
// 3.把set再放回数组里
let arr2 = Array.from(new Set(arr));
// arr = Array.from(new Set(arr));
console.log(arr2);
