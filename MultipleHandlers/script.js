let p1 = new Promise((resolve, reject) => {
    // alert("Hey I am not resolved")
    setTimeout(() => {
            resolve(1);
    }, 2000)
})

// promise chaining;we wait for the result of the handler attached after running, then the result is used to do some other work
// promise chaining pass the result to each other
p1.then(() => {
    console.log("Hurray")
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(4)
            }, 6000)
    })
}).then((value) => { console.log(value) })


// another handler is attached; this will woek parallelly with all the handlers!
// this does not pass the result to each other
p1.then(() => {
    console.log("Congratulations this promise is now resolved")
})