// our element which is accessed by the id
let first = document.getElementById("first");

// to get the value of an attribute
let a = first.getAttribute("class")
console.log(a)

// check for existence of an attribute
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))

// to set value of an attribute
first.setAttribute("hidden", "true")
first.setAttribute("class", "true sachin")

// to remove an attribute from the element
first.removeAttribute("class")

// to get the collection of all attributes
console.log(first.attributes)

// to access our custom attributes
console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)