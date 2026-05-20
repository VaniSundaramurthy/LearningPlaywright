console.log(greeting);
var greeting = "hello";
console.log(greeting);

// Function hoisting
sayHello(); // Works even though defined later

function sayHello() {
    console.log("Hello, world!");
}

// Variable hoisting with var
console.log(myVar); // Output: undefined
var myVar = 10;
console.log(myVar); // Output: 10

// With let/const (no hoisting in the same way)
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;


console.log(a); // not declared so it undefined
var a = 10; // global variable
console.log(a);