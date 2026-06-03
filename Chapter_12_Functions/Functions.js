//Functions objects strings and multi dimensional arrays

//Functions
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); // Output: 15

//Objects
const person = {
    name: "John",
    age: 30,        
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
person.greet(); // Output: Hello, my name is John

//Strings
const str = "Hello, World!";
console.log(str.length); // Output: 13
console.log(str.toUpperCase()); // Output: HELLO, WORLD!    
//Multi-dimensional arrays
const matrix = [
    [1, 2, 3], 
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[0][1]); // Output: 2
console.log(matrix[1][2]); // Output: 6 


//Template Literal  
//Functions with parameters
function greet(name) {
    return `Hello, ${name}!`;
}

//Functions with default parameters
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

//Functions with No Parameters  
function greet() {
    return "Hello, World!";
}

//Function with Return Value
function add(a, b) {
    return a + b;
}

//Function with param and No Return Value
function greet(name) {
    console.log(`Hello, ${name}!`);
}

//Function with No Parameters and No Return Value
function greet() {
    console.log("Hello, World!");
}   

//Function with Expressions
const add = function(a, b) {
    return a + b;
}
console.log(add(5, 10)); // Output: 15

//Arrow Functions
const add = (a, b) => a + b;
console.log(add(5, 10)); // Output: 15  

    //Functoons as Expressions
const greet = function(name) {
    return `Hello, ${name}!`;
}   
console.log(greet("Alice")); // Output: Hello, Alice!   

    //Console.log -no return value
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Bob"); // Output: Hello, Bob!
//Return value meaning  
function add(a, b) {
    return a + b;
}
const result = add(5, 10);
console.log(result); // Output: 15

//Arrow Functions with Multiple Parameters
const multiply = (a, b) => a * b;
console.log(multiply(5, 10)); // Output: 50 

//Anonymous Function
setTimeout(function() {
    console.log("This is an anonymous function!");
}, 2000);

//Arrow Function (ES6)
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Charlie")); // Output: Hello, Charlie!
