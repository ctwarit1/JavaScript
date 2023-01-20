// ES6 
// it started in 2015 with some features which are: 


// *********
// 1) let, const to replace var

// if declared with var its function scoped

// if variable declared with let and const its a block scoped

// var value="twarit";
// console.log(value);

// let value="twarit";
// console.log(value);

// const value="twarit";
// value="chokniwal";
// console.log(value);


// *********
// 2) Arrow functions
// these func also called fat arrow func it is the most popular feature of es6 

// let sum = () =>{
//     let a=2;
//     let b=2;
//     return a+b;

// }
// console.log(sum());


// *********
// 3) Template literal

// earlier concatenation is done
// but after es6 we can template string and it is making easy and readable as well

// let a="Good";
// let b="Morning";
// console.log(`Hi dear ${a} ${b}`);


// *********
// 4) Function parameter default value

// function multiply(a=2,b=2){
//     console.log(a*b);
// }
// multiply();


// *********
// 5)  Module
// it is nothing but any file with '.js' extension


// *********
// 6) Destructuring assignment
// it unpacks values from arrays, or properties, or form objects into distinct variable

// let arr1=['hello', 'dear', 'how', 'are', 'you'];
// const [first,,,,last] = arr1;
// console.log(first); 
// console.log(last); 


// *********
// 7) Spread operator
// its syntax is same as rest operators
// basic ex of spread operaor
// function sum(a,b,c){
//     console.log(a+b+c);
// }
// let arr=[1,2,3];
// sum(...arr);


// one more ex
// let arr1=[1,2,3,4];
// let arr2=[5,6,7,8];
// arr1=[...arr1,...arr2];
// console.log(arr1);


// *********
// 8) Object property shorthand



// *********
// 9) class
// class feature invented in es6 as we do in java 
// ex for class with contructor 
// class Vehicle{
//     constructor(model, name){
//         this.model=model;
//         this.name=name;
//     }
//     detail(){
//         console.log(`model of my ${this.name} car is ${this.model}`);
//     }
// }
// let obj=new Vehicle(2014,'honda');
// obj.detail();


// *********
// 10) Rest parameters

// by using rest operator we are getting the passed argument in an array
// function sum(...all){
//     console.log(all);
// }
// sum(1,2,3,4,5);

// function fun(a,b,...c){
//     console.log(`${a} ${b}`);
//     console.log(c);
//     console.log(c[0]);
//     console.log(c.length);
//     console.log(c.indexOf('edan'));
// }
// fun('ronaldo', 'neymar', 'pele', 'messi', 'edan');

