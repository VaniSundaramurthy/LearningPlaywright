//single quote string
let singleQuoteString = 'This is a string with single quotes.';

//double quote string
let doubleQuoteString = "This is a string with double quotes.";

//template literal string
let name = "Alice";
let templateLiteralString = `Hello, ${name}! This is a template literal string.`;   


//multiline string using template literals
let multilineString = `This is a string
that spans multiple lines
using template literals.`;

//string concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Concatenating strings with a space in between     
console.log(singleQuoteString);
console.log(doubleQuoteString);
console.log(templateLiteralString);
console.log(multilineString);
console.log(fullName);  

//Different Types of String Methods
let str = "Hello, World!";

//length property
console.log(str.length); // Output: 13
//toUpperCase() method
console.log(str.toUpperCase());
//toLowerCase() method
console.log(str.toLowerCase());
//indexOf() method
console.log(str.indexOf("World")); // Output: 7
//substring() method
console.log(str.substring(0, 5)); // Output: Hello      

