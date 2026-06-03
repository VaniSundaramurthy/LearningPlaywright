//Rest of the parameters in a function
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5));
// Output: 9
//Rest parameters with other parameters
function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
}   
console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]
console.log(multiply(3, 4, 5)); // Output: [12, 15]


//Spread operator with rest parameters
function combineArrays(...arrays) {
    return arrays.reduce((combined, arr) => [...combined, ...arr], []);
}
console.log(combineArrays([1, 2], [3, 4], [5])); // Output: [1, 2, 3, 4, 5]

//Interview question example
function findMax(...numbers) {
    return Math.max(...numbers);
}
console.log(findMax(1, 5, 3)); // Output: 5
console.log(findMax(10, 20, 5)); // Output: 20

//Another example with rest parameters
function createUser(name, age, ...hobbies) {
    return { name, age, hobbies };
}       
console.log(createUser("Alice", 30, "Reading", "Traveling"));
// Output: { name: 'Alice', age: 30, hobbies: [ 'Reading', 'Traveling' ] }  
console.log(createUser("Bob", 25));
// Output: { name: 'Bob', age: 25, hobbies: [] }
//Spread with Error handling example
function logErrors(...errors) {
    errors.forEach(error => console.error("Error:", error));
}       
logErrors("Invalid input", "Connection failed");    


//Scope of rest parameters
function testRest(a, b, ...rest) {
    console.log("a:", a); // 1
    console.log("b:", b); // 2
    console.log("rest:", rest); // [3, 4, 5]
}
testRest(1, 2, 3, 4, 5);

//Setup configuration example
function setupConfig(name, version, ...options) {
    console.log(`Setting up ${name} v${version} with options:`, options);
}

setupConfig("MyApp", "1.0", "debug", "verbose");

let env="staging";//let is block scoped, so it will be accessible in the entire file but not outside of it
function setupconfig(){
let timeout=3000;  //let is block scoped, so it won't be accessible outside this function
console.log(env);
console.log(timeout);
}
setupconfig();
console.log(env); // staging
// console.log(timeout); // ReferenceError: timeout is not defined (timeout is local to setupconfig)
