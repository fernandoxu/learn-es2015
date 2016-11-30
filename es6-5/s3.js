'use strict';
//对象的合并
//Object.assign
let obj1 = {
    x: 'x'
};
let obj2 = {
    y: 'y'
};
let obj3 = {
    x: 'x2'
};
let obj4 = Object.assign(obj1, obj2, obj3);
console.log(obj1, obj2, obj3, obj4, obj1 === obj4);

//特殊情况

let info = {
    age: 23
};
let me = Object({
    name: 'fernando'
}, info);
console.log(me);

function Util() {
    this.hehe = 'hehe';
}
Object.assign(Util.prototype, {
    getTime() {
        console.log(new Date, this, '---');
    }
});
Util.prototype = {
    getTime() {
        console.log(new Date);
    }
}
let u = new Util;
console.log(u.constructor);
