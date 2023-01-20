// ***************
// Promise examples

// 1)

// executor function used(resolve , reject) 

// let ex1 = new Promise( (resolve, reject) => {

//     let x = 0;
//     if(x==0){
//         resolve();
//     }
//     else{
//         reject()
//     }

// } );
// ex1.then(
//     function(){
//         console.log("Got it");
//     }).catch( function() {
//         console.log("Something happened");
//     }
// );

// ***************
// 2)

// let ex2 = new Promise( (resolve, reject) => {

//     let x = 0;
//     if(x==1){
//         resolve();
//     }
//     else{
//         reject()
//     }

// } );
// ex2.then(
//     function(){
//         console.log("Got it");
//     }).catch( function() {
//         console.log("Something happened");
//     }
// );

// ***************

// 3)

let ex3 = new Promise( (resolve, reject) => {

    let x = "Hello";
    let y = "Hello";
    if(x==y){
        resolve();
    }
    else{
        reject()
    }

} );
ex3.then(
    function(){
        console.log("x and y are equal");
    }).catch( function() {
        console.log("x and y are not equal");
    }
);
