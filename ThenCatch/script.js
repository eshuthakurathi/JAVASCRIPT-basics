// the syntax of promise executes in the background 

let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending")  //promise in is pending state until and unless it is either rejected or resolved
    setTimeout(() => {
            console.log("I am a promise and I am resolved")
            resolve(true)  //gives a value when resolved
    }, 5000)
})

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
            console.log("I am a promise and I am rejected")
            reject(new Error("I am an error"))  //gives an error when rejected
    }, 5000)
})


console.log(p1 , p2) //both are executed parallelly


// To get the value; after promise is resolved it gives the value
p1.then((value) => {
    console.log(value)
})

// To catch the errors; error isn't shown in console or can say that teh error is handled 
p2.catch((error) => {
        console.log("some error occurred in p2")
})


// can also be executed as this 
p2.then((value)=>{
    console.log(value) 
},(error)=>{
    console.log(error)
})