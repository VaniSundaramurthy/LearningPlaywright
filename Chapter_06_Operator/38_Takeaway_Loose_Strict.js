// Takeaway: Loose Equality (==) vs Strict Equality (===)

// Loose Equality (==): Performs type coercion before comparison
// Strict Equality (===): Compares value AND type without coercion

// Examples:

// Numbers and Strings
console.log(5 == '5');   // true  (loose: '5' coerced to 5)
console.log(5 === '5');  // false (strict: number vs string)

// Booleans
console.log(1 == true);  // true  (loose: true coerced to 1)
console.log(1 === true); // false (strict: number vs boolean)

// null and undefined
console.log(null == undefined);  // true  (loose: both falsy)
console.log(null === undefined); // false (strict: different types)

// Objects (reference comparison)
let obj1 = { a: 1 };
let obj2 = { a: 1 };
console.log(obj1 == obj2);  // false (different references)
console.log(obj1 === obj2); // false (same, different references)

// NaN
console.log(NaN == NaN);  // false (NaN != NaN)
console.log(NaN === NaN); // false (same)

// Best Practice: Use === for comparisons to avoid unexpected coercion

// Key Takeaways:

// Loose(==): Allows type coercion, which can lead to unexpected results.
//     Strict(===): Compares both value and type exactly, recommended for reliable comparisons.