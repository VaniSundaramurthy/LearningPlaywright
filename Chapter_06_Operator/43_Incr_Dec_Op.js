//examples of increment and decrement operators
let x = 5;
console.log(x); // Output: 5    
x++; // Post-increment: returns x, then increments x
console.log(x);
x--; // Post-decrement: returns x, then decrements x
console.log(x); // Output: 5
let y = 10;
console.log(y); // Output: 10
++y;

// Pre-increment: increments y, then returns y
console.log(y);
--y; // Pre-decrement: decrements y, then returns y
console.log(y); // Output: 10
//post-increment example
let a = 3;
console.log(a++); // Output: 3 (returns a, then increments a)
console.log(a);   // Output: 4 (a has been incremented)     
//pre-increment example
let b = 3;
console.log(++b); // Output: 4 (increments b, then returns b)
console.log(b);
// Output: 4 (b has been incremented)       
//Real time example of increment and decrement operators
let counter = 0;
console.log(counter);
counter++; // Increment counter by 1
console.log(counter);
counter--; // Decrement counter by 1
console.log(counter); // Output: 0
//what all variables are incremented and decremented in a loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}
//Examples of ERT in a loop
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i; // Equivalent to sum = sum + i
}
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)    

