//Slicing and Dicing Arrays
let numbers = [1, 2, 3, 4, 5];
//let slicedNumbers = numbers.slice(2, 4);
let slicedNumbers = numbers.slice(2, 5);
console.log(numbers.slice(0)) // Output: [1, 2, 3, 4, 5]
console.log(slicedNumbers); // Output: [2, 3, 4]




let fruits = ["apple", "banana", "cherry", "date", "fig"];
let slicedFruits = fruits.slice(0, 3);
console.log(slicedFruits); // Output: ["apple", "banana", "cherry"] 
//Negative indices example:
let slicedFruitsNegative = fruits.slice(-3, -1);
console.log(slicedFruitsNegative); // Output: ["cherry", "date"]    

//Slice(start, end) method does not modify the original array
//  and returns a new array containing the selected elements.
//  The start index is inclusive, while the end index is exclusive.
// If negative indices are used, they count from the end of the array.


//splice vs Slice:
//The splice method is used to add or remove elements from an array, 
// while the slice method is used to create a new array from a portion of an existing array. The splice method modifies the original array, while the slice method does not. The splice method takes three parameters: the starting index, the number of elements to remove, and the elements to add (optional). The slice method takes two parameters: the starting index and the ending index (exclusive).


//concat example:
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let concatenatedArray = array1.concat(array2);
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]
//The concat method is used to merge two or more arrays into a new array. It does not modify the original arrays and returns a new array containing the combined elements. In the above example, we concatenate `array1` and `array2` to create `concatenatedArray`, which contains all the elements from both arrays.

//Join example:
let words = ["Hello", "world", "!"];
let sentence = words.join(" ");
console.log(sentence); // Output: "Hello world !"
//The join method is used to join all elements of an array into a string, separated by a specified separator. In the above example, we join the elements of the `words` array with a space (" ") as the separator to create the `sentence` string.  

//spread operator example:
let arrayA = [1, 2, 3];
let arrayB = [4, 5, 6];
let combinedArray = [...arrayA, ...arrayB];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
//The spread operator (...) is used to expand the elements of an array into individual elements. In the above example, we use the spread operator to combine `arrayA` and `arrayB` into a new array called `combinedArray`, which contains all the elements from both arrays.   
 

//every &Some example:
let numbersArray = [1, 2, 3, 4, 5];
let allPositive = numbersArray.every(num => num > 0);
console.log(allPositive); // Output: true
let someGreaterThanThree = numbersArray.some(num => num > 3);
console.log(someGreaterThanThree); // Output: true
//The every method tests whether all elements in the array pass a specified test (provided as a function), and returns true if all elements pass the test, otherwise it returns false. In the above example, we check if all numbers in `numbersArray` are greater than 0, which returns true. The some method tests whether at least one element in the array passes a specified test (provided as a function), and returns true if at least one element passes the test, otherwise it returns false. In the above example, we check if some numbers in `numbersArray` are greater than 3, which returns true. 

//Checking Array Equality:
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 === arr2); // Output: false
//In JavaScript, arrays are reference types, which means that when you compare two arrays using the strict equality operator (===), it checks whether they reference the same object in memory, not whether their contents are the same. In the above example, `arr1` and `arr2` contain the same elements, but they are different objects in memory, so the comparison returns false. To check for array equality based on contents, you can use a function that compares each element of the arrays.  
function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
console.log(arraysEqual(arr1, arr2)); // Output: true
//The `arraysEqual` function checks if two arrays are equal by first comparing their lengths. If the lengths are different, it returns false. Then, it iterates through each element of the arrays and compares them. If any elements are different, it returns false. If all elements are the same, it returns true, indicating that the arrays are equal in terms of their contents.

//Array.isArray example:
let arr3 = [1, 2, 3]; //array
let notAnArray = "Hello"; //string not an array
console.log(Array.isArray(arr3)); // Output: true
console.log(Array.isArray(notAnArray)); // Output: false
//The `Array.isArray` method is used to determine whether a given value is an array. It returns true if the value is an array, and false otherwise. In the above example, `arr3` is an array, so `Array.isArray(arr3)` returns true, while `notAnArray` is a string, so `Array.isArray(notAnArray)` returns false.  

//arrow function example:
let numbersArray2 = [1, 2, 3, 4, 5];
let squaredNumbers = numbersArray2.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
//In this example, we use the `map` method to create a new array called `squaredNumbers`, which contains the squares of each number in `numbersArray2`. The arrow function `num => num * num` takes each element `num` from the array and returns its square. The resulting array contains the squared values of the original numbers.  

//some real world example of array slicing:
let students = ["Alice", "Bob", "Charlie", "David", "Eve"]; 
let topStudents = students.slice(0, 3);
console.log(topStudents); // Output: ["Alice", "Bob", "Charlie"] 
//In this example, we have an array of student names, and we use the `slice` method to create a new array called `topStudents` that contains the first three students from the original array. The `slice(0, 3)` method call returns a new array containing the elements from index 0 to index 2 (not including index 3), which are "Alice", "Bob", and "Charlie".  

//Some - atleast one element in the array satisfies the condition
let ages = [18, 22, 15, 30, 25];
let hasMinor = ages.some(age => age < 18);
console.log(hasMinor); // Output: true
let ages = [18, 22, 15, 30, 25];
let hasAdult = ages.some(age => age >= 18);
console.log(hasAdult); // Output: true
//In this example, we have an array of ages, and we use the `some` method to check if there is at least one age in the array that is 18 or older. The arrow function `age => age >= 18` checks if each age is an adult. Since there are ages (18, 22, 30, 25) that are 18 or older, the `some` method returns true, indicating that there is at least one adult in the array.   

