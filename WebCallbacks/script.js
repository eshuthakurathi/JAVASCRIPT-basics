// Syncronous programming: they are the actions that initiate and finish one by one
let a = prompt("What is your name?");
let b = prompt("What is your age?");
let c = prompt("What is your favorite color?");
console.log(a + " is " + b + " years old and has " + c + " favorite color.");

// Asynchronous programming:they are the actions in which we initiate now and they finish later
console.log("Start")
setTimeout(function() {
  console.log("Hey I am good");
}, 3000)
console.log("End")


// Callback func: is a func passed into another func as an argument, which is than invoked in the outer func to complete an action.
function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {   //onload is a func which acts on loading of a script
      console.log("Loaded script with SRC: " + src) 
      callback(null, src);
    }
    script.onerror = function() {  //onerror acts when an error occurs in our script
      console.log("Error loading script with SRC: " + src);
      callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
}
  

// custom func 
function hello(error, src) {
    if (error) {
      console.log(error)
      return
    }
    alert('Hello World!' + src);
}
  
  
function goodmorning(error, src) {
    
    if (error) {
      console.log(error)
      return
    }
    alert('Good morning' + src);
}
  
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning) 