setTimeout(()=>{
    console.log("Hacking wifi.... Please wait..." ) 
}, 1000)
    
try{
    setTimeout(()=>{ 
        console.log(rahul)  
    }, 100)
}

//firstly the try code is executed if there is no error catch is ignored and if error exixts, catch is executed!

catch(err){     //the err variable contains an error object
    console.log("Balle balle")
}
    
    

// if an exception occurs in scheduled code(setTimeout),then try..catch won't catch it that's cuz the code itself is executed later ehen the engine has left the try...catch construct
setTimeout(()=>{ 
    console.log("Fetching username and password.... Please wait..." )
}, 2000) 
    
setTimeout(()=>{ 
    console.log("Hacking Rahul's facebook id.... Please wait..." )
}, 3000) 
    
setTimeout(()=>{ 
    console.log("Username and password of Rahul (+919356700001) fetched.... Please wait..." )
}, 4000) 