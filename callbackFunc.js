// call back function

// *******

// adding one function as an argument

// function funcFirst(){
//     console.log("Func one called ")
// }
// function add(a, b, callback) {
//     console.log(a+b);
//     callback();
// }
// let a = 2;
// let b = 3;
// add(a, b, funcFirst);


// *******

// adding two functions as an argument

// function funcFirst(){
//     console.log("Func one called ")
// }
// function funcSecond(){
//     console.log("Func two called ")
// }
// function add(a, b, callback) {
//     console.log(a+b);
//     callback();
// }


// // calling the defined functions
// add(10, 20, funcFirst);
// add(30, 40, funcSecond);


// *******

// adding anonymous function


function add(a, b, callback) {
    console.log(a+b);
    callback();
}
add(2, 3, function(){console.log("calling anonymous function here") });