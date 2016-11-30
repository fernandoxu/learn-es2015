function* genFun() {
    let first = yield new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, 'first-' + initValue);
    });
    let second = yield new Promise((resolve, reject) => {
        // debugger
        setTimeout(resolve, 500, 'second-' + first);
    });
    let third = yield new Promise((resolve, reject) => {
        setTimeout(resolve, 700, 'third--' + second);
    });
}
let genHandler = genFun('init');

genHandler.next().value.then((value) => {
    console.log(value);
    genHandler.next(value).value.then((value) => {
        console.log(value);
        genHandler.next(value).value.then((value) => {
            console.log(value);
            genHandler.next(value).value.then((value) => {
                console.log(value);
            })
        })
    })
})
