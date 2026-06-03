//Pure Function examples

// A pure function is a function that always produces the same output for the same input and has no side effects.   
// Example 1: A pure function that adds two numbers
function add(a, b) {
    return a + b;
}   
console.log(add(2, 3)); // Output: 5
console.log(add(2, 3)); // Output: 5 (same output for same input)

// Example 2: A pure function that calculates the area of a circle
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}   

console.log(calculateCircleArea(5)); // Output: 78.53981633974483
console.log(calculateCircleArea(5)); // Output: 78.53981633974483 (same output for same input)
// Example 3: A pure function that converts Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(0)); // Output: 32
console.log(celsiusToFahrenheit(0)); // Output: 32 (same output for same input)
// Example 4: A pure function that checks if a number is even
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4)); // Output: true
console.log(isEven(4)); // Output: true (same output for same input)
// Example 5: A pure function that returns a new array with each element doubled
function doubleArray(arr) {
    return arr.map(x => x * 2);
}
console.log(doubleArray([1, 2, 3])); // Output: [2, 4, 6]
console.log(doubleArray([1, 2, 3])); // Output: [2, 4, 6] (same output for same input)  
// Example 6: A pure function that returns the maximum of two numbers
function max(a, b) {
    return a > b ? a : b;
}
console.log(max(5, 10)); // Output: 10
console.log(max(5, 10)); // Output: 10 (same output for same input)
// Example 7: A pure function that returns the length of a string
function stringLength(str) {
    return str.length;
}   
console.log(stringLength("Hello")); // Output: 5
console.log(stringLength("Hello")); // Output: 5 (same output for same input)

//Impure Example: A function that modifies an external variable (side effect)
let count = 0;


function increment() {
    count++; // Modifies external variable (side effect)
    return count;
}
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2 (different output for same input, side effect present)   
    