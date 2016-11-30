'use script';

// 解构赋值与函数的应用

// $.ajax({
//     method: 'get',
//     url: '',
// })

function ajax({
    method = 'get',
    url = 'default_url'
}) {
    console.log(method, url);
}
ajax({});

function ajax2({
    method = 'get',
    url = 'default_url'
} = {}) {
    console.log(method, url);
}
ajax2();
