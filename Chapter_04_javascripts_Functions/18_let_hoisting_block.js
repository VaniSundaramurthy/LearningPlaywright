let x = "global";
if (true) {
    console.log(x);  //temporary dead zone //ReferenceError: Cannot access 'x' 
    let x = "block";
    console.log(x);

}