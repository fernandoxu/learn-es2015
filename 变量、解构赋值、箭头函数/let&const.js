'use strict';

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000)
}

for (let j = 0; j < 3; j++) {
    setTimeout(function() {
        console.log(j);
    }, 1000)
}

// let不能重复定义；不存在变量声明提升

const a = 'a';
// a = 'b'; 报错

const USER_TYPE = {
        1: '普通用户',
        2: '超级用户',
        3: '管理员',
    }
    // 常用在一般不会被修改的东西，例如关系映射

// const 引用类型

// const obj = {
//     x: 1,
//     y: 2
// };
// console.log(obj);
// obj.x = 3;
// console.log(obj);//可以改写

// obj = {a: 1}//不能改
