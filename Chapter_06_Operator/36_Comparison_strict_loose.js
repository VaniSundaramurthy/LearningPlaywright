//Comparison Strict vs Loose
// In JavaScript, there are two types of comparison operators: strict equality (===) and loose equality (==). The main difference between them is how they handle type coercion.            
// Strict Equality (===):
// The strict equality operator (===) checks if two values are equal in both value and type. It does not perform type coercion, meaning that if the types of the values being compared are different, it will return false.
console.log(5 === '5'); // false (different type)

// Loose Equality (==):
// The loose equality operator (==) checks if two values are equal, but it performs type coercion if the types of the values being compared are different. This means that it will convert the values to a common type before making the comparison.
console.log(5 == '5'); // true (equal value, different type)    

// Examples:
// 5 === '5' // false (different type)
// 5 == '5' // true (equal value, different type)
// 0 == false // true (0 is falsy)
// 0 === false // false (different type)
// null == undefined // true (both are considered equal in loose equality)
// null === undefined // false (different type)

Comsole.log(0 == false); // true (0 is falsy)
console.log(0 === false); // false (different type)
console.log(null == undefined); // true (both are considered equal in loose equality)
console.log(null === undefined); // false (different type)

console.log(5 == '5'); // true (equal value, different type   
console.log(5 === '5'); // false (different type)


console.log(true == 1); // true (true is truthy)
console.log(true === 1); // false (different type)
console.log(false == 0); // true (false is falsy)
console.log(false === 0); // false (different type)

//give more examples of strict vs loose equality:
console.log('' == false); // true (empty string is falsy)
console.log('' === false); // false (different type)
console.log(0 == ""); // true (empty string is falsy)
console.log(0 === ""); // false (different type)    
console.log(0 == "0"); // true (0 is equal to "0" after type coercion)      
console.log("" === "0"); // false (different type)
console.log(null == 0); // false (null is not equal to 0
console.log(null === 0); // false (different type
console.log(undefined == 0); // false (undefined is not equal to 0)
console.log(undefined === 0); // false (different type)
