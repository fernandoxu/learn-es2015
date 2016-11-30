'use strict';

// 箭头函数 arrow function
let fun1 = function(a) {
    return a + 1;
};

let fun2 = (a) => {
    return a + 1;
};
let res1 = fun1(1);
let res2 = fun2(2);
// console.log(res1, res2);

// 如果大括号内没有运算>>

let fun3 = (a) => a + 1; //简洁的写法

let fun4 = a => a + 1; //更简洁的写法

let arr = [1, 3, 5, 7];

let r = arr.map(function(item, index, arr) {
    return item * item;
});

console.log(r);

let r1 = arr.map(item => item * item);
console.log(r1);

function fun5() {
    // setTimeout(function() {
    //     console.log(this.id);//undefined
    // });
    setTimeout(() => {
        console.log(this.id); //箭头函数this指向不变
    })
};

let obj = {
    id: 123
}
fun5.call(obj);

let obj2 = {
    id: 123,
    func1: function() {
        setTimeout(function() {
            console.log(this.id);
        })
    },
    func2: function() {
        setTimeout(() => {
            console.log(this.id);
        })
    },
    func3: () => {
        setTimeout(() => {
            console.log(this.id);
        });
    }
};
obj2.func1();
obj2.func2();
obj2.func3();
