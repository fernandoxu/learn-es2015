'use strict';
// empty
let arr = [1, 2, 3, 4, 5];
arr.ccc = 'ccc';

// 最基本的迭代
console.log('base');
for (let i = 0, len = arr.length; i < len; i++) {
    if (i === 3) {
        break;
    }
    console.log(arr[i]); //123
};

// forEach
console.log('\nforEach');
arr.forEach(function(item, index, arr) {
    if (item === 3) {
        return;
    }
    console.log(item); //1245
});
//不能用break跳出

//for in
console.log('\nfor in');
for (let i in arr) {
    if (i == 3) {
        break;
    }
    console.log(arr[i], typeof i);
}

//for of
console.log('\nfor of');
for (let item of arr) {
    if (item === 3) {
        break;
    }
}

//next
console.log('\nnext');
let arrIter = arr.entries();
let tmpIter = arrIter.next();
console.log(tmpIter.value);
while (!tmpIter.done) {
    tmpIter = arrIter.next();
    console.log(tmpIter.value);
}
