//Function Incrementer using Closure
function createIncrementer(start) {
    let count = start;  
    return function() {
        count++;
        return count;
    };
}
const incrementer = createIncrementer(5);
console.log(incrementer());
console.log(incrementer());
console.log(incrementer());
    