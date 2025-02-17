document.write("Hello")

const sum = (a, b, c) => {
  console.log("Yes I am running " + (a + b + c))
  a + b
}

// calling fucntion using settimeout
setTimeout(sum, 1000, 1, 2, 7)

// runs again an again after the given interval of time
// let c= setInterval(function() {
//   alert("setinterval")
// }, 3000)


// allows us to run a function once after the given interval of time
let a = setTimeout(function() {
  alert("I am inside of settimeout")
}, 5000)


// a condition for clearing timeout or not
let b = prompt("Do you want to run the settimout?")
if ("n" == b) {
  clearTimeout(a) //to cancel the execution of our settimeout
}

console.log(a) //gives the timer id in console window