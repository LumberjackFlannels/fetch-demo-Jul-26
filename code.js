let newHeading = "Heading Fun"
console.log(newHeading)
//fetch request example from jepreody website
//using fetch() is automatically a git request
//you can also add a second parameter object to modify what type you would like it to run
//fetch("http://randomwebsite.com", {})
fetch("https://jservice.io/api/random")
.then (response => response.json())
.then(data => console.log(data))

//you will get a promise response --> data request fulfillment is not guaranteed
//in the console you'll see Promise {<pending>}
//in the event power goes out, computer or service request is sent to dies
//server times out
//

//setTimeout(() => console.log("This line runs when?"), 5000)
//json.parse
//json.stringify
//window.fetch
//response.