//Arrow Functions
const add = (a, b) => a + b;
console.log(add(5, 10)); // Output: 15  

//Purpose of Arrow Functions
//1. Concise Syntax: Arrow functions provide a shorter syntax compared to traditional function expressions, making them more concise and easier to read.
//2. Lexical 'this' Binding: Arrow functions do not have their own 'this' context; instead, they inherit 'this' from the surrounding scope. This can be particularly useful when working with callbacks or methods that require access to the parent context.
//3. No 'arguments' Object: Arrow functions do not have their own 'arguments' object, which can help avoid confusion when working with nested functions or callbacks.
//4. Suitable for Callbacks: Arrow functions are often used as callbacks in array methods (like map, filter, reduce) and event handlers due to their concise syntax and lexical 'this' binding.

//String ARrow Functions
const greet = name => `Hello, ${name}!`;
console.log(greet("Alice")); // Output: Hello, Alice!   

