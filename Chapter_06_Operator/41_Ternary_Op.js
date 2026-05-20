//Examples of Ternary Operator Real time
let age = 18;
let isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult); // Output: Yes

//another example of ternary operator
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade); // Output: B    
//realtime example of ternary operator in a function
function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(10)); // Output: Even
console.log(checkEvenOdd(15)); // Output: Odd       
//realtime example of ternary operator in a template literal
let userName = "Alice";
let welcomeMessage = `Welcome, ${userName ? userName : "Guest"}!`;
console.log(welcomeMessage); // Output: Welcome, Alice!                     
let userName2 = "";
let welcomeMessage2 = `Welcome, ${userName2 ? userName2 : "Guest"}!`;
console.log(welcomeMessage2); // Output: Welcome, Guest!        

//mULTIPLE cONDITIONS IN tERNARY oPERATOR
let temperature = 30;
let weather = temperature > 30 ? "Hot" : temperature > 20 ? "Warm" : "Cold";
console.log(weather); // Output: Warm       

//ON EXAMPLE OF TERNARY OPERATOR IN A REALTIME SCENARIO
let userRole = "admin";
let accessLevel = userRole === "admin" ? "Full Access" : userRole === "editor" ? "Edit Access" : "Read Only Access";
console.log(accessLevel); // Output: Full Access        


//nESTED tERNARY oPERATOR
let marks = 75;
let result = marks >= 90 ? "A" : marks >= 80 ? "B" : marks >= 70 ? "C" : "F";
console.log(result); // Output: C   


//ONE MORE EXAMPLE OF TERNARY OPERATOR IN A REALTIME SCENARIO
let isLoggedIn = true;
let dashboardMessage = isLoggedIn ? "Welcome back!" : "Please log in to continue.";
console.log(dashboardMessage); // Output: Welcome back!     


//MAXIUMUM OF TWO NUMBERS USING TERNARY OPERATOR
let num1 = 10;
let num2 = 20;
let max = num1 > num2 ? num1 : num2;
console.log(max); // Output: 20

//MAXIMUM OF THREE NUMBERS USING TERNARY OPERATOR
let a = 5;
let b = 10;
let c = 15;
let maxOfThree = a > b ? (a > c ? a : c) : (b > c ? b : c);
console.log(maxOfThree); // Output: 15  