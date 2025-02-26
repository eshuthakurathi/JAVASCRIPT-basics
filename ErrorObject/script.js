try {
    let age = prompt("Enter your age")
    age = Number.parseInt(age) 
    if(age>150){
    throw new ReferenceError("This is probably not true")  //by throw syntax we can thrown our own error
    }
} catch (error) {
    console.log(error.name)  //err name is shown
    console.log(error.message)   //the message is printed
    console.log(error.stack) 
}

console.log("The script is still running")