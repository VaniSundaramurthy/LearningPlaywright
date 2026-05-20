var a = 10; // global variable  

function greet() {
    console.log(a);
    var a = 20; // local has highesst priority
    console.log("Hi Hello");
    console.log(a);
}

greet();
var a = 50;
console.log(a);
