//whenever a code is run if error occurs it is catched and if not then try block is executed but there is another clause finally which is executed irrespecive of the error occuring

const f = () => {
    try {
        let a = 0;
        // console.log(program)
        console.log("Program ran successfully")
        return
    }
    catch (err) {
        console.log("This is an error")
        console.log(p)
    }
    finally {  // ensures the code is run even if error occurs in any of the above blocks
        console.log("I will execute no matter wot")
        // Close the file
        // Exit the Loop
        // Write to the log file
    }
}

f()
console.log("End")  //finally is run before this outer return code or you can say it runs just before the end of the function