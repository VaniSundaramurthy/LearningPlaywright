//Array methods and properties:
let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // Output: 5

arr.push(6); // Adds 6 to the end of the array
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]
arr.pop(); // Removes the last element (6) from the array
console.log(arr); // Output: [1, 2, 3, 4, 5]
arr.unshift(0);

console.log(arr); // Output: [0, 1, 2, 3, 4, 5]
arr.shift(); // Removes the first element (0) from the array
console.log(arr); // Output: [1, 2, 3, 4, 5]
arr.splice(2, 1); // Removes 1 element at index 2 (the number 3)
console.log(arr); // Output: [1, 2, 4, 5]
arr.slice(1, 3); // Returns a new array containing elements from index 1 to 2 (not including index 3)
console.log(arr); // Output: [1, 2, 4, 5]
let newArr = arr.slice(1, 3);
console.log(newArr); // Output: [2, 4]
arr.indexOf(4); // Returns the index of the first occurrence of 4 in the array
console.log(arr);
// Output: [1, 2, 4, 5]
arr.includes(3);
// Returns true if 3 is found in the array, otherwise returns false
console.log(arr); // Output: [1, 2, 4, 5]   
arr.join(", ");
// Joins all elements of the array into a string, separated by ", "
console.log(arr);
       
//Shift and unshift are used to add or remove elements from the 
//  beginning of an array, while push and pop are used for the end of an array.
// 
// Splice can be used to add or remove elements at any position in the array, 

// and slice is used to create a new array from a portion of an existing array. IndexOf and includes are useful for searching for specific values within an array, and join is helpful for creating a string representation of the array's contents.
//splice example:
let fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1, "blueberry", "grape");
console.log(fruits); // Output: ["apple", "blueberry", "grape", "cherry"]   
//In this example, we use the splice method to remove 1 element at index 1 
// (the "banana") and add "blueberry" and "grape" in its place. 
// The resulting array contains "apple", "blueberry", "grape", and "cherry".

//Real world example:
let shoppingList = ["milk", "bread", "eggs"];
shoppingList.push("butter");     //push the element at last
console.log(shoppingList); // Output: ["milk", "bread", "eggs", "butter"]
shoppingList.splice(1, 1); // Removes "bread" from the list
console.log(shoppingList); // Output: ["milk", "eggs", "butter"]    

//indexof example:
let colors = ["red", "green", "blue", "yellow"];
let index = colors.indexOf("blue");
console.log(index); // Output: 2    
//lastIndexOf example:
let numbers = [1, 2, 3, 2, 4];
let lastIndex = numbers.lastIndexOf(2);
console.log(lastIndex); // Output: 3

//includes example:
let pets = ["dog", "cat", "hamster"];
let hasCat = pets.includes("cat");
console.log(hasCat); // Output: true
let hasFish = pets.includes("fish");
console.log(hasFish); // Output: false

//find example:
let people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];
let person = people.find(p => p.age > 30);
console.log(person); // Output: { name: "Charlie", age: 35 }

//find index example:
let numbers2 = [10, 20, 30, 40];
let index2 = numbers2.findIndex(num => num > 25);
console.log(index2); // Output: 2 (the index of the first number greater than 25, which is 30)
    //find LastIndex example:
let numbers3 = [1, 2, 3, 2, 4];
let lastIndex2 = numbers3.findLastIndex(num => num === 2);
console.log(lastIndex2); // Output: 3 (the index of the last occurrence of 2)   


//Iteration example:
let fruits2 = ["apple", "banana", "cherry"];    
fruits2.forEach(fruit => {
    console.log(fruit);
});
// Output:
// apple
// banana
// cherry
for (let i = 0; i < fruits2.length; i++) {
    console.log(fruits2[i]);
}
// Output:
// apple
// banana
// cherry

//Interesting fact: Arrays in JavaScript are dynamic, meaning they can grow and shrink in size as needed. This allows for flexible data structures that can accommodate varying amounts of data without needing to specify a fixed size upfront.    
//Examples of dynamic arrays:
let dynamicArray = [];
dynamicArray.push(1);
console.log(dynamicArray); // Output: [1]
dynamicArray.push(2, 3, 4);
console.log(dynamicArray); // Output: [1, 2, 3, 4]
dynamicArray.pop();
console.log(dynamicArray);  
// Output: [1, 2, 3]
dynamicArray.unshift(0);
console.log(dynamicArray); // Output: [0, 1, 2, 3]
dynamicArray.shift();
console.log(dynamicArray); // Output: [1, 2, 3] 
    

//Map example:
let numbers4 = [1, 2, 3, 4];
let squaredNumbers = numbers4.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16]

//map using ternary operator:
let numbers5 = [1, 2, 3, 4];
let evenOdd = numbers5.map(num => num % 2 === 0 ? "even" : "odd");
console.log(evenOdd); // Output: ["odd", "even", "odd", "even"]

//another example of map:
let names = ["Alice", "Bob", "Charlie"];
let nameLengths = names.map(name => name.length);
console.log(nameLengths); // Output: [5, 3, 7]

//Filter example:
let numbers6 = [1, 2, 3, 4, 5];
let evenNumbers = numbers6.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
let words = ["apple", "banana", "cherry", "date"];
let longWords = words.filter(word => word.length > 5);
console.log(longWords); // Output: ["banana", "cherry"]

//grades using map and filter:
let grades = [85, 92, 78, 90, 88];
let passingGrades = grades.filter(grade => grade >= 80);
console.log(passingGrades); // Output: [85, 92, 90, 88]
let gradeCategories = grades.map(grade => {
    if (grade >= 90) {
        return "A"; 
    } else if (grade >= 80) {
        return "B"; 
    } else if (grade >= 70) {
        return "C"; 
    } else if (grade >= 60) {
        return "D"; 
    }
    else {
        return "F"; 
    }       

});
console.log(gradeCategories); // Output: ["B", "A", "C", "A", "B"]
//If salary is more than 50000, then return "High", if salary is between 30000 and 50000, return "Medium", otherwise return "Low"
let salaries = [25000, 35000, 45000, 55000, 65000];
let salaryCategories = salaries.map(salary => {
    if (salary > 50000) {
        return "High";
    } else if (salary >= 30000) {
        return "Medium";
    }
    else {
        return "Low";
    }
});
console.log(salaryCategories); // Output: ["Low", "Medium", "Medium", "High", "High"]   
//reduce example:
let numbers7 = [1, 2, 3, 4];
let sum = numbers7.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 10

//reduce using ternary operator:
let numbers8 = [1, 2, 3, 4];
let product = numbers8.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(product); // Output: 24

//flatten example:
let nestedArray = [[1, 2], [3, 4], [5, 6]];
let flattenedArray = nestedArray.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

//real time usage of reduce:
let transactions = [
    { type: "income", amount: 1000 },
    { type: "expense", amount: 200 },
    { type: "income", amount: 500 },
    { type: "expense", amount: 300 }
];      
let netBalance = transactions.reduce((balance, transaction) => {
    if (transaction.type === "income") {
        return balance + transaction.amount;    
    } else if (transaction.type === "expense") {
        return balance - transaction.amount;
    }   
    else {
        return balance;
    }
}, 0);
console.log(netBalance); // Output: 1000 - 200 + 500 - 300 = 1000   




//Array of Functions 
//Sort

//Sort example:
let numbers9 = [5, 2, 9, 1, 5, 6];
numbers9.sort((a, b) => a - b);
console.log(numbers9);
// Output: [1, 2, 5, 5, 6, 9]
let fruits3 = ["banana", "apple", "cherry"];
fruits3.sort();
console.log(fruits3);
// Output: ["apple", "banana", "cherry"]    
//Natural sort example:
let mixedArray = ["10", "2", "1", "20"];
mixedArray.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
console.log(mixedArray);
// Output: ["1", "2", "10", "20"]
//Lexical sort example:
let words2 = ["apple", "Banana", "cherry", "date"];
words2.sort((a, b) => a.localeCompare(b));
console.log(words2);
// Output: ["Banana", "apple", "cherry", "date"]

