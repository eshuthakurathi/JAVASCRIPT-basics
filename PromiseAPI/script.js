let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Value 1");
    }, 11000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Value 2");
            // reject(new Error("Error"));
    }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Value 3");
    }, 3000);
});


// we can get our values using then func
p1.then((value) => {
        console.log(value)
})

p2.then((value) => {
        console.log(value)
})

p3.then((value) => {
        console.log(value)
})



// but if we want to see all our our values together then a promise API method is used
// to get all the values together of our promise
// let promise_all = Promise.all([p1, p2, p3])
promise_all.then((value) => {
    console.log(value)
})



// usually promise.all do not work if any of our promise is rejected,for any rejected case allsettled method is introduced which gieves the status and value of all of our promises
// let promise_all = Promise.allSettled([p1, p2, p3])
promise_all.then((value) => {
    console.log(value)
})



// it gives the value of that promise which is resolved first [only and only if all the promises are resolved if any one of them is rejected it will give error]
// let promise_all = Promise.race([p1, p2, p3])
promise_all.then((value) => {
    console.log(value)
})



// a improved method of promise.race which gives the first resolved value irrespective of the rejected promises and if all the promises are rejected an AggregateError is thrown forcefully
// let promise_all = Promise.any([p1, p2, p3])
promise_all.then((value) => {
    console.log(value)
})



// it makes a resolved promise with the given value
// let promise_all = Promise.resolve(6)
promise_all.then((value) => {
    console.log(value)
})


// it makes a rejected promise with the given value
let promise_all = Promise.reject(new Error("Hey"))
promise_all.then((value) => {
    console.log(value)
})