let a = document.getElementsByClassName("container")[0]

// events being handled using onclick property
// adding a handler with js overwrites the existing handler
a.onclick = () => {
  let b = document.getElementsByClassName("container")[0]
  b.innerHTML = "Hello World!"
}

let x = function(event) {
  console.log(event.target) //gives the target that is in which button we click for the event to occur
  console.log(event.type, event.clientX, event.clientY)  //event type ; coordinates of the cursor 
  alert("Hello World1!")
}
  
let y = function(e) {
  console.log(e)  //e is an event object, shows all the properties of it
  alert("Hello World2!")
}


// addEventListener is used to assign multiple handlers to an event
btn.addEventListener('click', x)
  
btn.addEventListener('click', y)
  

let c = prompt("What is your favorite number?");  
if (c == "2") {
  btn.removeEventListener('click', x) //only works when our func. object are same
}
