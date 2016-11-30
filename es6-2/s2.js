'use strict';

// symbol
// let ele = document.querySelector('#li');
// ele.x = 123;
// ele.y = 234;

// let syb = Symbol('sub');
// let syb2 = Symbol('sub');
// console.log(syb, syb2, syb == syb2);
// console.log(typeof syb);

// Symbol不可参与运算，必须tostring之后才可以
let sybx = Symbol('subx');
let syby = Symbol('suby');
let ele = {};
ele[sybx] = 123;
ele[syby] = 234;
console.log(ele);
// ele.syby = 123444444;
