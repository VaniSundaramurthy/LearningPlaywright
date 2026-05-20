//different type of type
let num = 42;
let str = "Hello";
let bool = true;
let obj = { name: "John", age: 30 };
let arr = [1, 2, 3, 4, 5];
let func = function () { console.log("This is a function"); };
console.log(typeof num); // Output: number

console.log(typeof str); // Output: string
console.log(typeof bool); // Output: boolean
console.log(typeof obj); // Output: object
console.log(typeof arr); // Output: object (arrays are a type of object in JavaScript)
console.log(typeof func); // Output: function               


//Real time example of type of operator
let userInput = "42";
let convertedNumber = Number(userInput);
console.log(typeof convertedNumber); // Output: number      
let isLoggedIn = "true";
let isUserLoggedIn = isLoggedIn === "true";
console.log(typeof isUserLoggedIn); // Output: boolean  


//realtime ex