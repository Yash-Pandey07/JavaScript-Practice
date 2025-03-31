function fetchData(callback) {
    setTimeout(() => {
      callback("Data received");
    }, 2000); // Simulates a delay of 2 seconds
  }
  
//   fetchData((data) => {
//     console.log(data); // Output: Data received
//   });
  
  const fetchDataPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received from Promise");
        }, 2000);
    });
  };

// fetchDataPromise().then(console.log); // Output: Data received from Promise

async function fetchDataAsync() {
    console.log("Fetching data...");
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data); // Output: JSON data from the API
    console.log("Data fetched successfully!");
}
// console.log("Before fetching data...");
// fetchDataAsync(); // Call the async function to fetch data

// find, filter, map, push, pop, shift, and unshift 
/*
const testCases = ["Login", "Navigate", "Click Button"];
testCases.push("Verify Result");
console.log(testCases); // ["Login", "Navigate", "Click Button", "Verify Result"]
testCases.unshift("Open App");
console.log(testCases); // ["Open App", "Login", "Navigate", "Click Button", "Verify Result"]
testCases.pop(); // Removes the last element
console.log(testCases); // ["Open App", "Login", "Navigate", "Click Button"]
testCases.shift(); // Removes the first element
console.log(testCases); // ["Login", "Navigate", "Click Button"]
*/

//Objects methods 

let testData = { username: "testUser" };
testData.password = "password123"; // Dot Notation
testData["email"] = "test@example.com"; // Bracket Notation

// console.log(testData); // {username: "testUser", password: "password123", email: "test@example.com"}


console.log("Value of a before ",a) //undefined
// console.log("Value of b before ",b) //error: Cannot access 'b' before initialization
// console.log(c) // ReferenceError: c is not defined

var a =10;
var a =20;

let b =10;
{
let b =20; // SyntaxError: Identifier 'a' has already been declared
}
// const c ; // SyntaxError: Missing initializer in const declaration
const c = 10;


