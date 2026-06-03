//Searching and Checking
let myString = "Hello, World!";

//indexOf() method
console.log(myString.indexOf("World")); // Output: 7
console.log(myString.indexOf("JavaScript")); // Output: -1 (not found)

//includes() method
console.log(myString.includes("World")); // Output: true
console.log(myString.includes("JavaScript")); // Output: false

//startsWith() and endsWith() methods
console.log(myString.startsWith("Hello")); // Output: true
console.log(myString.endsWith("!")); // Output: true    

//indexOf() method with a starting index
console.log("IndexOf" + myString.indexOf("o", 5));
//lastIndexOf() method
console.log("LastIndex of" + myString.lastIndexOf("o"));

//Regex search - Regular Expressions
//regex means regular expression, 
// it is a powerful tool for pattern matching 
// and searching within strings. It allows you to define complex search patterns using special characters and syntax. In JavaScript, you can create a regex using the RegExp constructor or by using regex literals (enclosed in forward slashes). For example, the regex /world/i will match the word "world" in a case-insensitive manner. You can use the test() method to check if a string matches the regex pattern.    
let regex = /world/i;
console.log(regex.test(myString)); // Output: true (case-insensitive search)        
let regex = /world/i;
console.log(regex.test(myString)); // Output: true (case-insensitive search)

