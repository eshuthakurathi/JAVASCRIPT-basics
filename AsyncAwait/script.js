// we can async any function and await a promise in it!!
// async ensures that the function returns a promise and wraps non promises in it

async function first(){  //by using async this function is made to return a promisse 
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 Deg")
        }, 5000)
    })

    let bangaloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 Deg")
        }, 1000)
    })

    
    // delhiWeather.then(alert)
    // bangaloreWeather.then(alert)

    console.log("Fetching Delhi Weather...")
    let delhiW = await delhiWeather   //it waits till the promise is fulfilled and once fulfilled it moves forward until then it waits for it to get fulfilled
    console.log("Fetched Delhi Weather: " + delhiW)

    console.log("Fetching Bangalore Weather...")
    let bangaloreW = await bangaloreWeather
    console.log("Fetched Bangalore Weather: " + bangaloreW)
    return [delhiW, bangaloreW]
}

const second = async () => {
    console.log("Hey I am second and I am not waiting ")
}

first()
second()  //the function runs parallelly with the first one
// first().then((x)=>{
//     alert(x)     //and .then() will not give any errors
// })