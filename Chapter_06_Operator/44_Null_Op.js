//Nullish Operator (??) - ES2020
//The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
//Example of nullish operator
let userInput = null;
let defaultValue = "Default Value";
let result = userInput ?? defaultValue;
console.log(result); // Output: Default Value   
//Another example of nullish operator
let userInput2 = undefined;
let defaultValue2 = "Default Value 2";
let result2 = userInput2 ?? defaultValue2;
console.log(result2); // Output: Default Value 2    
//Example of nullish operator with a non-nullish value
let userInput3 = "User Input";
let defaultValue3 = "Default Value 3";
let result3 = userInput3 ?? defaultValue3;
console.log(result3);
// Output: User Input
//Example of nullish operator with a falsy value
let userInput4 = "";
let defaultValue4 = "Default Value 4";
let result4 = userInput4 ?? defaultValue4;
console.log(result4); // Output: (empty string) because "" is not null or undefined 
//Example of nullish operator with a falsy value
let userInput5 = 0;
let defaultValue5 = "Default Value 5";
let result5 = userInput5 ?? defaultValue5;
console.log(result5); // Output: 0 because 0 is not null or undefined   
//Example of nullish operator in a function
function getUserName(user) {
    return user.name ?? "Anonymous";
}
console.log(getUserName({ name: "Alice" })); // Output: Alice
console.log(getUserName({})); // Output: Anonymous  
//Example of nullish operator in a template literal
let userName = null;
let welcomeMessage = `Welcome, ${userName ?? "Guest"}!`;
console.log(welcomeMessage); // Output: Welcome, Guest!
