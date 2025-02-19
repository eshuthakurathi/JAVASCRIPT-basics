// solution for callback hell is promise;a promise for code execution

let promise = new Promise(function(resolve, reject) {  //js engine provide resolve and reject callbacks
    alert("Hello")
    resolve(56)   //if job is finished successfully
})

console.log("Hello One")
setTimeout(function() {
    console.log("Hello Two in 2 seconds")
}, 2000)

console.log("My name is " + "Hello Three")
console.log(promise)



// Promise is used for parallel execution of a given block of code like we can say

// Fetch google.com homepage  ==> console.log("google.com homepage done") 
// Fetch data from the data api 
// Fetch pictures from the server       :for all these executions to run parallelly and not get stuck in any one of them for its full execution
// Print downloading 
// Rest of the script 