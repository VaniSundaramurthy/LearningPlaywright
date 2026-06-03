// Function examples: declaration, expression, and arrow function

// 1) Function Declaration (hoisted)
function add(a, b) {
    return a + b;
}
console.log('Declaration add(2,3)=', add(2, 3)); // 5

// 2) Function Expression (not hoisted)
const multiply = function (a, b) {
    return a * b;
};
console.log('Expression multiply(2,3)=', multiply(2, 3)); // 6

// 3) Arrow Function (concise syntax, lexical `this`)
const divide = (a, b) => a / b;
console.log('Arrow divide(6,2)=', divide(6, 2)); // 3

// Arrow functions do NOT have their own `this`.
const obj = {
    value: 42,
    regular: function () { return this.value; },
    arrow: () => this.value
};
console.log('obj.regular() =>', obj.regular()); // 42
console.log('obj.arrow() =>', obj.arrow()); // undefined (lexical this)

// Immediately-invoked function expression (IIFE) - a common function expression pattern
(function () { console.log('IIFE runs'); })();

// --- kept existing practical examples (arrow usage) ---
// Array mapping with arrow
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// Event handling (guarded for non-browser environments)
if (typeof document !== 'undefined' && document.getElementById) {
    const btn = document.getElementById('myButton');
    if (btn) btn.addEventListener('click', () => { console.log('Button clicked!'); });
}

// Validate status code (arrow function as expression)
const validateStatus = status => (status >= 200 && status < 300) ? 'Success' : 'Error';
console.log(validateStatus(200)); // Success
console.log(validateStatus(404)); // Error


//IIFE Example
(function() {
    console.log("This is an Immediately Invoked Function Expression (IIFE)!");
})();

//One more example of arrow function with no parameters
const sayHello = () => console.log("Hello, World!");
sayHello(); // Output: Hello, World!

