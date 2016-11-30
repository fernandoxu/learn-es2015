//Array.copyWithin
// Array.prototype.copyWithin(target,start=0,end=this.length);
// target 被覆盖的地方的下标
// start 截取的开始下标
// end 截取结束的下标的后一个
let arr = [1, 2, 3, 4, 5];
arr.copyWithin(1, 0, 2);
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin
console.log(arr);
