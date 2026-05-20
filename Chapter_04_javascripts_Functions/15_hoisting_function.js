function getUserStatus() {
    console.log(statusCode);
    var statusCode = 200;
    console.log(statusCode);
}


getUserStatus();

getUserStatus();


function getUserStatus() {
    console.log(statusCode);
    var statusCode = 200;
    console.log(statusCode);
}

//Hoisting is done with let and var but not with const.
// Hoisting in JavaScript exists to make code execution more flexible by allowing variables and functions to be referenced before they are explicitly declared.It ensures that declarations are processed during the compilation phase, so the interpreter knows about them before execution begins.This can simplify coding but also cause confusion if misunderstood.

/* 🔑 Purpose of Hoisting
Early access to functions  
Function declarations are hoisted with their full body, allowing you to call them before their definition in the code.This supports cleaner organization and modularity.

Variable awareness  
Variables declared with var are hoisted and initialized as undefined, meaning the interpreter knows they exist even before the line of declaration.This prevents runtime errors like "variable not defined."

Temporal Dead Zone(TDZ)
let and const are hoisted but remain uninitialized until execution reaches their declaration.This design prevents accidental use of variables before they are properly defined.
 */