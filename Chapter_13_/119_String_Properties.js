//String Properties and Methods
let str = "Hello, World!";

//length property
console.log(str.length); // Output: 13  
//toUpperCase() method
console.log(str.toUpperCase());
//toLowerCase() method
console.log(str.toLowerCase());
//indexOf() method
console.log(str.indexOf("World")); // Output: 7
//substring() method
console.log(str.substring(0, 5)); // Output: Hello

//Access by Index
console.log(str[0]); // Output: H
console.log(str[7]); // Output: W
//String Immutability
str[0] = "h";
console.log(str); // Output: Hello, World! (unchanged)
   // Length of String from a Variable  
let myString = "JavaScript is fun!";
console.log(myString.length); // Output: 19
//Index starts at 0
console.log(myString[0]);
console.log(myString[5]);   

//Access by Index
console.log(myString[0]); // Output: J
console.log(myString[5]); // Output: c  
//String Immutability
myString[0] = "j";
console.log(myString); // Output: JavaScript is fun! (unchanged)    
    console.log(str.charAt(0)); // Output: H
console.log(str.charAt(7)); // Output: W
//CharCodeAt() method
console.log(str.charCodeAt(0)); // Output: 72
console.log(str.charCodeAt(7)); // Output: 87
console.log(str.at(-1)); // Output: ! (last character)
console.log(str.at(-6)); // Output: H (first character)
//index =0 length =1 

