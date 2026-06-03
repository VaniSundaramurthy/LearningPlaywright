//substring() method
let str = "Hello, World!";
console.log(str.substring(0, 5)); // Output: Hello
console.log(str.substring(7)); // Output: World!
//slice() method
console.log(str.slice(0, 5)); // Output: Hello
console.log(str.slice(7)); // Output: World!

console.log(str.slice(-3)); // Output: World
//Slice with negative indices
console.log(str.slice(-6, -1)); // Output: World    
