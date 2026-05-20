/* Identifiers
Identifiers are names for variables, functions, classes, etc. Rules:

Must start with: letter (a-z, A-Z), underscore (_), or dollar sign ($)
Can contain: letters, digits (0-9), underscores, dollar signs
Cannot be reserved keywords
Case-sensitive */
Summary/*
Identifiers → Allowed if they start with a letter, _, or $; not allowed if they start with digits or use reserved words.

Literals → Allowed if properly formed; not allowed if malformed(unterminated strings, invalid octals, etc.).

Operators → Allowed when used with valid operands; not allowed when incomplete or incorrectly combined. */


//Valid Identifiers
let studentName = "Alice";   // starts with a letter
let _counter = 10;           // starts with underscore
let $price = 99.99;          // starts with dollar sign

//Invalid identifiers
let 123name = "Bob";   // ❌ cannot start with a digit
let my-name = "Tom";   // ❌ hyphen not allowed (interpreted as subtraction)
let class = "Math";    // ❌ reserved keyword


//Valid Literals
let age = 21;                // numeric literal
let greeting = "Hello";      // string literal
let isActive = true;         // boolean literal
let data = null;             // null literal
let arr = [1, 2, 3];         // array literal
let obj = { x: 10, y: 20 };    // object literal

//Invalid Literals
let num = 09;          // ❌ invalid octal literal in strict mode
let str = 'Hello;      // ❌ missing closing quote
let regex = /abc;      / / ❌ unterminated regular expression


//Valid Operators

let sum = 5 + 3;             // arithmetic
let isEqual = (sum === 8);   // comparison
let result = isEqual ? "Yes" : "No"; // ternary
let mask = 0b1010 & 0b1100;  // bitwise AND


//Invalid Operators
let invalidOp = 5 ++ 3;     // ❌ invalid increment operator usage
let invalidComp = (5 ==== 5); // ❌ invalid comparison operator
let result = 5 / 0;    // ❌ not a syntax error, but produces Infinity
let check = true &&;   // ❌ missing right-hand operand
let sum = +* 5;        // ❌ invalid operator combination

// Identifiers (variable names, function names, etc.)
let studentName = "Alice";       // string literal
const age = 21;                  // numeric literal
var isGraduated = false;         // boolean literal

// Object and Array literals
let student = { name: studentName, age: age, graduated: isGraduated };
let scores = [85, 90, 78, 92];

// Function identifier
function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];           // += operator
    }
    return sum / arr.length;     // / operator
}

// Operators in action
let avgScore = calculateAverage(scores);
console.log("Average Score:", avgScore);

let passed = avgScore >= 50 ? true : false; // ternary operator
console.log("Passed:", passed);

// Using logical operators
if (passed && isGraduated) {
    console.log("Student has graduated successfully!");
} else {
    console.log("Student still has requirements.");
}

// Bitwise operator example
let mask = 0b1010;   // binary literal
let value = 0b1100;
console.log("Bitwise AND:", mask & value);  // & operator