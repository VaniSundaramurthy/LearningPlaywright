//different types of  in Javascript

//1. For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//For loop is used when we know the number of iterations beforehand. It consists of three parts: initialization, condition, and increment/decrement. In the above example, we initialize `i` to 0, check if `i` is less than 5, and increment `i` by 1 in each iteration.

//2. While loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}
//Use of while loop is when we want to execute a block of code as long as a specified condition is true. In the above example, we initialize `j` to 0 and continue to execute the loop until `j` is less than 5, incrementing `j` by 1 in each iteration.

//3. Do-while loop
let k = 0;
do {
    console.log(k);
    k++;
}
while (k < 5);
//The do-while loop is similar to the while loop, but it guarantees that the block of code will be executed at least once, even if the condition is false. In the above example, we initialize `k` to 0 and execute the loop at least once, incrementing `k` by 1 in each iteration until `k` is less than 5.

//4. For...of loop
const array = ['a', 'b', 'c', 'd', 'e'];
for (const element of array) {
    console.log(element);
}
//The for...of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, etc. In the above example, we iterate over each element of the array and log it to the console.

//5. For...in loop
const object = { name: 'John', age: 30, city: 'New York' };
for (const key in object) {
    console.log(`${key}: ${object[key]}`);
}
//The for...in loop is used to iterate over the enumerable properties of an object. In the above example, we iterate over each key in the object and log the key-value pairs to the console.




