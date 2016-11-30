'use strict';

//Promise
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is resolve!');
    }, 1000);
});

// p.then((value) => {
//         console.log(value);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

//Promise内部的resolve方法运行导致promis实例的状态发生改变
// 状态从pending编导resolve
// 当状态从pending变到resolve的时候,promis实例的then方法会被promise执行


// <!--标注：下面略微修改了英文版的示例，主要是执行3次testPromise()的效果，如果您有疑问，可以参看英文的说明文档：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise-->
// <div id="log"></div>
// <script>
//     'use strict';
    var promiseCount = 0;
    function testPromise() {
        var thisPromiseCount = ++promiseCount;

        var log = document.getElementById('log');
        log.insertAdjacentHTML('beforeend', thisPromiseCount + ') 开始(同步代码开始)<br/>');

        // 我们创建一个新的promise: 然后用'result'字符串完成这个promise (3秒后)
        var p1 = new Promise(function (resolve, reject) {
            // 完成函数带着完成（resolve）或拒绝（reject）promise的能力被执行
            log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise开始(异步代码开始)<br/>');

            // 这只是个创建异步完成的示例
            window.setTimeout(function () {
                // 我们满足（fullfil）了这个promise!
                resolve(thisPromiseCount)
            }, Math.random() * 2000 + 1000);
        });

        // 定义当promise被满足时应做什么
        p1.then(function (val) {
            // 输出一段信息和一个值
            log.insertAdjacentHTML('beforeend', val + ') Promise被满足了(异步代码结束)<br/>');
        });

        log.insertAdjacentHTML('beforeend', thisPromiseCount + ') 建立了Promise(同步代码结束)<br/><br/>');
    }
    testPromise();
    testPromise();
    testPromise();
// </script>
