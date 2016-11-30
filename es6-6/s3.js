'use strict';

//Map
let objMap = {
    'objMap': 'objMap'
};
let arrMap = ['a', 'r', 'r'];

let map = new Map([
    [objMap, 'o'],
    [arrMap, 'a'],
    [1, 2]
]);
console.log(map);

//Map to Array
console.log([...map]);=
//Array to Map 下标为key，value为value
let arr = ['a', 'b', 'c'];
let mapVal = [arr.map((item, index, array) => [index, item])];
let arrToMap = new Map(mapVal);
console.log(mapVal);
console.log(arrToMap);

// WeakMap()
// 和map一样,只不过key必须为对象，和weakset一样
// 不在内存中的对象会被销毁
