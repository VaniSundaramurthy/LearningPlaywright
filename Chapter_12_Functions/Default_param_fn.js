//Default parameters in functions
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!

//Default parameters with multiple parameters
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5)); // Output: 5 (5 * 1)
console.log(multiply(5, 2)); // Output: 10 (5 * 2)

//Retrying with more examples of default parameters
function createUser(name, age = 18) {
    return { name, age };
}   
console.log(createUser("Bob")); // Output: { name: 'Bob', age: 18 }
console.log(createUser("Alice", 25)); // Output: { name: 'Alice', age: 25 }


//maxretries and delay examples

function fetchData(url, retries = 3, delay = 1000) {
    console.log(`Fetching data from ${url} with ${retries} retries and ${delay}ms delay.`);
    // Simulate fetch logic here...
}       
fetchData("https://api.example.com/data"); // Uses default retries and delay
fetchData("https://api.example.com/data", 5); // Uses default delay
fetchData("https://api.example.com/data", 5, 2000); // Uses provided retries and delay  
    