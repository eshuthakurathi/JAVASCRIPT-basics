// tagName only exist for element nodes
let x = document.getElementsByTagName('span')[0]
// console.log shows the element DOM tree
console.log(x)

let y = document.getElementsByTagName('span')[0]
// console.dir shows element as an object with its properties
console.dir(y)

// nodeName is defined for any node(text,comment,etc)
console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)

// allows to get the html inside the element as a string
console.log(first.innerHTML)
// valid only for element nodes!!
first.innerHTML= "<i>Hey I'm italic</i>"

// contains the full html(innerhtml+the element itself)
console.log(first.outerHTML)
first.outerHTML ="<div>Hey this is it</div>"


console.log(document.body.firstChild)
// to get the content inside of it
console.log(document.body.firstChild.data)
console.log(document.body.firstChild.nodeValue)

// provides access to the text inside the element;only text minus all the tags
console.log(document.body.textContent)
console.log(document.body.firstChild.data)

// for specifing the visibility of the element
first.hidden = false