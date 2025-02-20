let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resolved after 2 seconds")
        resolve(56)
    }, 2000)
})

p1.then((value) => {   //do some work when executed
    console.log(value)
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("Promise 2") }, 2000)
    }) 

}).then((value) => {  //when new promise is fulfilled then only this is executed
    console.log("We are done")
    return 2
}).then((value)=>{      //when above promise is resolved then only this then works 
    console.log("Now we are pakka done")
})
