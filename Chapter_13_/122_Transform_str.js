//Transform String
let str = "Hello, World!";

//toUpperCase() method
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
//toLowerCase() method
console.log(str.toLowerCase()); // Output: hello, world!
//trim() method
let strWithSpaces = "   Hello, World!   ";  
console.log(strWithSpaces.trim()); // Output: Hello, World! (removes leading and trailing whitespace)
//replace() method
console.log(str.replace("World", "JavaScript")); // Output: Hello, JavaScript! (replaces "World" with "JavaScript") 
//replaceAll() method
let strWithMultipleWorlds = "World, World, World!";
console.log(strWithMultipleWorlds.replaceAll("World", "JavaScript")); // Output: JavaScript, JavaScript, JavaScript! (replaces all occurrences of "World" with "JavaScript")    
//split() method
let csv = "John,Doe,30,Engineer";
let parts = csv.split(",");
console.log(parts); // Output: ["John", "Doe", "30", "Engineer"] (splits the string into an array based on the comma delimiter) 
//join() method
let array = ["Hello", "World"];
let joinedString = array.join(" ");
console.log(joinedString); // Output: Hello World (joins the array elements into a string with a space in between)
//Trim start and end of string
let strWithSpaces = "   Hello, World!   ";
console.log(strWithSpaces.trimStart());
console.log(strWithSpaces.trimEnd());
        //Concatenation using template literals
let firstName = "John";
let lastName = "Doe";
let fullName = `${firstName} ${lastName}`;  
console.log(fullName); // Output: John Doe (concatenates firstName and lastName with a space in between using template literals)

//Url Encoding and Decoding
let url = "https://www.example.com/search?q=JavaScript & programming";
let encodedUrl = encodeURIComponent(url);
console.log(encodedUrl); // Output: https%3A%2F%2Fwww.example.com%2Fsearch%3Fq%3DJavaScript%20%26%20programming (encodes the URL by replacing special characters with their percent-encoded equivalents)
let decodedUrl = decodeURIComponent(encodedUrl);
console.log(decodedUrl); // Output: https://www.example.com/search?q=JavaScript & programming (decodes the encoded URL back to its original form)

//Split and Join
let sentence = "JavaScript is a versatile language";
let words = sentence.split(" ");
console.log(words);

let words2 = sentence.split("_");
console.log(words2); // Output: ["JavaScript is a versatile language"] (splits the sentence into an array of words based on spaces, but since there are no underscores, it returns the entire sentence as a single element in the array)
let joinedSentence = words.join(" "); 
console.log(joinedSentence); // Output: JavaScript is a versatile language (splits the sentence into an array of words and then joins them back into a string with spaces in between)

let joinedSentence2 = words.join("#");
console.log(joinedSentence2); // Output: JavaScript#is#a#versatile#language (joins the words with a hash symbol in between)

//String Reverse
let originalString = "Hello, World!";
let reversedString = originalString.split("").reverse().join("");
console.log(reversedString); // Output: !dlroW ,olleH (reverses the string by splitting it into an array of characters, reversing the array, and then joining it back into a string)    

//Palindrome Check
function isPalindrome(str) {
    let cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}   

console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true (ignores spaces and punctuation, and checks if the cleaned string is the same as its reverse)
console.log(isPalindrome("Hello, World!")); // Output: false (not a palindrome)     

//Java Anagram Check
function areAnagrams(str1, str2) {
    let cleanedStr1 = str1.replace(/[^A-Za-z0-9]/g, "").toLowerCase();  
    let cleanedStr2 = str2.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let sortedStr1 = cleanedStr1.split("").sort().join("");
    let sortedStr2 = cleanedStr2.split("").sort().join("");
    return sortedStr1 === sortedStr2;
}   
//Eat and Tea are anagrams
console.log(areAnagrams("Eat", "Tea"));
//Listen and Silent are anagrams
console.log(areAnagrams("Listen", "Silent"));
//Hello and World are not anagrams
console.log(areAnagrams("Hello", "World")); 
    