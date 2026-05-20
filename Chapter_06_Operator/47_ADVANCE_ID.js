let a = 10;
console.log(a++ + a); // Output: 10        
console.log(++a + a); // Output: 22 (a is now 12, so it returns 12 + 12)
console.log(a-- + a); // Output: 24 (a is now 12, so it returns 12 + 11)
console.log(--a + a); // Output: 22 (a is now 10, so it returns 10 + 10)    
//Real time example of increment and decrement operators in a loop
let count = 0;
for (let i = 0; i < 5; i++) {
    count++; // Increment count by 1 in each iteration
}

let a = 10;
console.log(++a + ++a);
console.log(a); // Output: 12 (a is now 12 after the pre-increment operations)


//Loop and Array examples of increment and decrement operators
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; // Equivalent to sum = sum + numbers[i]
}
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)

