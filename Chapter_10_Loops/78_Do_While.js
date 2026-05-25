let retry = 0;
do {
    console.log("Trying to connect... Attempt #" + (retry + 1));
    retry++;
}
while (retry < 5);
//In this example, we use a do-while loop to simulate a connection attempt. The loop will execute at least once, and it will continue to execute as long as the `retry` variable is less than 5. Each time the loop runs, it logs the current attempt number and increments the `retry` variable.


let i = 5;
while (i < 5) {
    console.log(i);
    i--;
}

/*let i = 5;
do (i < 5) {
    console.log(i);
    i++;
} while (i < 5);
//In the above example,
//  the while loop will not execute because the condition `i < 5` is false from the start. However, the do-while loop will execute at least once, logging the value of `i` (which is 5) before checking the condition
// and exiting the loop.*/

let count = 10;
while (count < 10) {
    console.log(count);
    count++;
}

let n = 1;
do {
    console.log(n);
    n++;
} while (n < 10);
//In the above example, the while loop will not execute because the condition `count < 10` is false from the start. However, the do-while loop will execute at least once, logging the value of `n` (which is 1) before checking the condition and exiting the loop.        