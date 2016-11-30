'use strict';
//有点像一个函数内部有多个函数，是一个状态机。
//generator生成器
// yield生成

// 三种状态 hello js end
function* genFun() {
    yield 'hello';
    yield 'generator';
    yield '!';
}

let genHandler = genFun();
// console.log(genHandler.next());
// console.log(genHandler.next());
// console.log(genHandler.next());
// console.log(genHandler.next());
// console.log(genHandler.next());

// for (let item of genHandler) {
//     console.log(item, '通过 for of循环运行遍历器');
// }

console.log([...genHandler], '通过...运行遍历器');
