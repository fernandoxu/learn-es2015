'use strict';
// 对象
// 属性名简写
let a = '123';
let b = '456';
let c = [1, 2];

let obj = {
    a,
    b,
    c,
};

function func() {
    return {
        a,
        b,
        c
    };
}
console.log(obj);
let obj2 = {
    add: function() {

    }
}
let obj3 = {
    add() {
        return 123
    },
    add: function() {

    }
}
console.log(obj3.add());
