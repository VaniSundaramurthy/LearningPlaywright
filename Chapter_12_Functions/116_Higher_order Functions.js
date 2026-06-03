//Examples of higher-order functions in JavaScript

// 1) A function that takes another function as an argument (callback)  
function greet(name, callback) {
    const greeting = `Hello, ${name}!`;
    callback(greeting);
}
greet('Alice', message => console.log(message)); // Output: Hello, Alice!

// 2) A function that returns another function (closure)    
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
// 3) Using built-in higher-order functions (e.g., map, filter, reduce)
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]