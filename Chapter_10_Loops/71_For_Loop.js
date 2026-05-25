//For Loop different types of  in Javascript

//1. For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//For loop is used when we know the number of iterations beforehand. It consists of three parts:
// I C U -> initialization, condition, and increment/decrement. In the above example, we initialize `i` to 0,
// check if `i` is less than 5,
// and increment `i` by 1 in each iteration.   

//Javascript variables
let name = "John"; //string
let age = 30; //number
let isStudent = true; //boolean
let hobbies = ["reading", "gaming", "coding"]; //array
let person = { name: "John", age: 30, city: "New York" }; //object      

//Let, var and const are used to declare variables in JavaScript.
//let is block-scoped and can be reassigned, while var is function-scoped and can also be reassigned. const is block-scoped and cannot be reassigned after its initial assignment.
//Definitions of let, var and const in JavaScript:
//1. let: The let keyword is used to declare a block-scoped variable. It can be reassigned and is not hoisted to the top of its scope.
//2. var: The var keyword is used to declare a function-scoped variable. It can be reassigned and is hoisted to the top of its scope.
//3. const: The const keyword is used to declare a block-scoped variable that cannot be reassigned after its initial assignment. It is also hoisted to the top of its scope, but it must be initialized at the time of declaration.
//Example of let    


let x = 10;
x = 20; // This is allowed
console.log(x); // Output: 20       
//Example of var
var y = 10;
y = 20; // This is allowed
console.log(y); // Output: 20
//Example of const
const z = 10;
// z = 20; // This will throw an error because z is a constant
console.log(z); // Output: 10   

//In summary,
//  use let for variables
//  that may need to be reassigned, var for function-scoped variables (though it's generally recommended to use let or const instead), and const for variables that should not be reassigned after their initial assignment.    

for(let i = 0; i < 1 ; i++){
    console.log(i);
}
