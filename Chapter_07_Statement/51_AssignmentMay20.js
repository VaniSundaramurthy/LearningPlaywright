//API If else in Javascript real time examples in Javascript


//Given an HTTP status code, print which category it belongs to using Javascript

/*•	200–299 → Success
•	300–399 → Redirection
•	400–499 → Client Error
•	500–599 → Server Error
•	Anything else → Invalid*///HTTP status code category if else examples using Javascript

function categorizeStatusCode(statusCode) {
    if (statusCode >= 200 && statusCode < 300) {
        console.log("Success");
    } else if (statusCode >= 300 && statusCode < 400) {
        console.log("Redirection");
    } else if (statusCode >= 400 && statusCode < 500) {
        console.log("Client Error");
    } else if (statusCode >= 500 && statusCode < 600) {
        console.log("Server Error");
    } else {
        console.log("Invalid");
    }
}
// Example usage:
categorizeStatusCode(200); // Output: Success   
categorizeStatusCode(301); // Output: Redirection
categorizeStatusCode(404); // Output: Client Error
categorizeStatusCode(500); // Output: Server Error
categorizeStatusCode(700); // Output: Invalid

// Examples for Login Lockout After Failed Attempts

//Problem: Track failed login attempts. Lock the account after 3 failed attempts.

//Sample Input/Output:

/* Input: attempts = 2
Output: 1 attempt left before lockout

Input: attempts = 3
Output: 🔒 Account Locked — Contact support

Input: attempts = 0
Output: Login successful */

// Function to check login attempts
function checkLoginAttempts(attempts) {
    if (attempts < 3) {
        console.log(`${3 - attempts} attempt(s) left before lockout`);
    } else if (attempts === 3) {
        console.log("🔒 Account Locked — Contact support");
    } else {
        console.log("Invalid number of attempts");
    }
}
// Example usage:
checkLoginAttempts(2); // Output: 1 attempt left before lockout
checkLoginAttempts(3); // Output: 🔒 Account Locked — Contact suppor
checkLoginAttempts(0); // Output: 3 attempt(s) left before lockout
checkLoginAttempts(4); // Output: Invalid number of attempts
checkLoginAttempts(-1); // Output: Invalid number of attempts
checkLoginAttempts(1); // Output: 2 attempt(s) left before lockout
checkLoginAttempts(5); // Output: Invalid number of attempts
checkLoginAttempts(3); // Output: 🔒 Account Locked — Contact support

/* Problem 3: Build Health Reporter
Problem: Given the percentage of test cases passed in a CI build, report build health.
100% → Green Build
90–99% → Stable (investigate failures)
70–89% → Unstable
Below 70% → Broken Build (block deployment)
Sample Input/Output:
Input: 95
Output: 🟡 Stable — Investigate failures
Input: 65
Output: 🔴 Broken Build — Block deployment */
// Function to report build health
function reportBuildHealth(percentage) {
    if (percentage === 100) {
        console.log("🟢 Green Build");
    } else if (percentage >= 90 && percentage < 100) {
        console.log("🟡 Stable — Investigate failures");
    } else if (percentage >= 70 && percentage < 90) {
        console.log("🟠 Unstable");
    } else if (percentage < 70) {
        console.log("🔴 Broken Build — Block deployment");
    } else {
        console.log("Invalid percentage");
    }
}
// Example usage:
reportBuildHealth(95); // Output: 🟡 Stable — Investigate failure
reportBuildHealth(65); // Output: 🔴 Broken Build — Block deployment    
reportBuildHealth(100); // Output: 🟢 Green Build
reportBuildHealth(85); // Output: 🟠 Unstable
reportBuildHealth(50); // Output: 🔴 Broken Build — Block deployment
reportBuildHealth(110); // Output: Invalid percentage
reportBuildHealth(-10); // Output: Invalid percentage
reportBuildHealth(90); // Output: 🟡 Stable — Investigate failures
reportBuildHealth(70); // Output: 🟠 Unstable   
reportBuildHealth(89); // Output: 🟠 Unstable



/* Test Case Pass/Fail Verdict
Problem: Compare actual result with expected result and print test verdict.
Sample Input / Output:
Input: actual = "Login successful", expected = "Login successful"
Output: ✅ Test Passed
Input: actual = "Login failed", expected = "Login successful"
Output: ❌ Test Failed — Expected: "Login successful", Actual: "Login failed" */
// Function to compare actual and expected results in Javascript   


function compareResults(actual, expected) {
    if (actual === expected) {
        console.log("✅ Test Passed");
    } else {
        console.log(`❌ Test Failed — Expected: "${expected}", Actual: "${actual}"`);
    }
}
// Example usage:
compareResults("Login successful", "Login successful"); // Output: ✅ Test Passed   
compareResults("Login failed", "Login successful"); // Output: ❌ Test Failed — Expected: "Login successful", Actual: "Login failed"
compareResults("Test passed", "Test passed"); // Output: ✅ Test Passed
compareResults("Test failed", "Test passed"); // Output: ❌ Test Failed — Expected: "Test passed", Actual: "Test failed"   
compareResults("Hello", "Hello"); // Output: ✅ Test Passed
compareResults("Hello", "Hi"); // Output: ❌ Test Failed — Expected: "Hi", Actual: "Hello"
compareResults("123", "123"); // Output: ✅ Test Passed
compareResults("123", "456"); // Output: ❌ Test Failed — Expected: "456", Actual: "123"



/*Question 3 — Bug Severity Classifier
Problem: Given a bug's impact score (1–10), classify the severity.
9–10 → Critical(block release)
7–8 → High
4–6 → Medium
1–3 → Low
Anything else → Invalid score
Sample Input / Output:
Input: 9
Output: Severity: Critical — Block release
Input: 5
Output: Severity: Medium*/

// Function to classify bug severity based on impact score in Javascript
function classifyBugSeverity(score) {
    if (score >= 9 && score <= 10) {
        console.log("Severity: Critical — Block release");
    } else if (score >= 7 && score < 9) {
        console.log("Severity: High");
    } else if (score >= 4 && score < 7) {
        console.log("Severity: Medium");
    } else if (score >= 1 && score < 4) {
        console.log("Severity: Low");
    } else {
        console.log("Invalid score");
    }
}
// Example usage:
classifyBugSeverity(9); // Output: Severity: Critical — Block release
classifyBugSeverity(5); // Output: Severity: Medium
classifyBugSeverity(8); // Output: Severity: High
classifyBugSeverity(3); // Output: Severity: Low
classifyBugSeverity(0); // Output: Invalid score
classifyBugSeverity(11); // Output: Invalid score




/* Add API Requests
Define the endpoints you want to test.
Inside the collection, click Add Request
•	Choose method (GET, POST, PUT, DELETE)
•	Enter the API URL
•	Add headers (e.g., Content-Type, Authorization)
•	Provide body data for POST/PUT */

// Example of adding a POST request in Postman
// 1. Open Postman and click on "New" to create a new request.
// 2. Select "Request" and give it a name (e.g., "CreateUser").
// 3. Choose the method (e.g., POST) from the dropdown.
// 4. Enter the API URL (e.g., https://api.example.com/users).
// 5. Click on the "Headers" tab and add necessary headers (e.g., Content-Type: application/json).
// 6. Click on the "Body" tab, select "raw", and choose "JSON" from the dropdown.
// 7. Enter the JSON data for the request body (e.g., {"name": "John Doe", "email": "john.doe@example.com"}).
// 8. Click "Send" to execute the request and see the response.
// Example of adding a GET request in Postman
// 1. Open Postman and click on "New" to create a new request.
// 2. Select "Request" and give it a name (e.g., "Get User").
// 3. Choose the method (e.g., GET) from the dropdown.
// 4. Enter the API URL (e.g., https://api.example.com/users/1).
// 5. Click on the "Headers" tab and add necessary headers (e.g., Authorization: Bearer token).
// 6. Click "Send" to execute the request and see the response.
// Example of adding a PUT request in Postman
// 1. Open Postman and click on "New" to create a new request.
// 2. Select "Request" and give it a name (e.g., "Update User").
// 3. Choose the method (e.g., PUT) from the dropdown.
// 4. Enter the API URL (e.g., https://api.example.com/users/1).
// 5. Click on the "Headers" tab and add necessary headers (e.g., Content-Type: application/json).
// 6. Click on the "Body" tab, select "raw", and choose "JSON" from the dropdown.
// 7. Enter the JSON data for the request body (e.g., {"name": "Jane Doe", "email": "jane.doe@example.com"}).
// 8. Click "Send" to execute the request and see the response.
// Example of adding a DELETE request in Postman
// 1. Open Postman and click on "New" to create a new request.
// 2. Select "Request" and give it a name (e.g., "Delete User").
// 3. Choose the method (e.g., DELETE) from the dropdown.

// 4. Enter the API URL (e.g., https://api.example.com/users/1).
// 5. Click on the "Headers" tab and add necessary headers (e.g., Authorization: Bearer token).
// 6. Click "Send" to execute the request and see the response.

// Example of adding a GET request with query parameters in Postman
// 1. Open Postman and click on "New" to create a new request.
// 2. Select "Request" and give it a name (e.g., "Search Users").
// 3. Choose the method (e.g., GET) from the dropdown.
// 4. Enter the API URL with query parameters (e.g., https://api.example.com/users?name=John).
// 5. Click on the "Headers" tab and add necessary headers (e.g., Authorization: Bearer token).
// 6. Click "Send" to execute the request and see the response.

// Example of adding a POST request with form data in Postman
// 1. Open Postman and click on "New" to create a new request.
// 2. Select "Request" and give it a name (e.g., "Submit Form").
// 3. Choose the method (e.g., POST) from the dropdown.
// 4. Enter the API URL (e.g., https://api.example.com/submit).
// 5. Click on the "Headers" tab and add necessary headers (e.g., Content-Type: application/x-www-form-urlencoded).
// 6. Click on the "Body" tab, select "x-www-form-urlencoded".
// 7. Enter the form data key-value pairs (e.g., name: John Doe, email:     
