/*
function x(){
    console.log("x");
}

function y(x){
    x();
    console.log("y");
}

*/

function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name} ${this.lastName} ${punctuation}`);
}
const person = { name: "Yash" , lastName:"Pandey"};

// greet.call(person, "Hello", "!"); // Output: "Hello, Yash!"

// greet.apply(person, ["Hi", "."]); // Output: "Hi, Yash."

const boundGreet = greet.bind(person, "Hey");
boundGreet("!"); // Output: "Hey, Yash!"