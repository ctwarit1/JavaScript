// // ************
// // 1)

//Async await
// this feature invented in the es8 update

// async function test() {
//     try {
//         const result = await otherAsyncFunction();
//         console.log(result); // output result
//     } catch(e) {
//         console.log(e); // Can catch errors if otherAsyncFunction() throws an error
//     }
// };


  
// // ************
// // 2)
//  //Object.values()
 
//  const ex1 ={
//       greet : "hello",
//       age : 20,
//       a : 10,
//       b : 100
//  }

//  let store = Object.values(ex1);
//  console.log(store);


//  // ************
// // 3)
 
//  //Object.entries()

//  let ex1={x : 100, y : 90,z : 80}

//  let store=Object.entries(ex1);
//  console.log("Object.entries() :- ",store);

 

// // ************
// // 4)

//  //String padStart() & padEnd()
 
//  //padstart
//  let val1="Hello";
 
//  let store1 = text.padStart(7,'hi');

//  console.log(store1);

//  //padEnd
//  let val2="Hello";
 
//  let store2 = text.padEnd(7,'hi');

//  console.log(store2);

 
// // ************
// // 5)

//  //Trailing commas

 //array
//  const arr = [
//     "one",
//     "two",
//     "three",,
//   ];
  
//   console.log(arr.length);

//   //object
//   const car = {
//     color: 'red',
//     type: 'coupe',
//     hp: 500
// };

// const {color, type, hp,} = car;

// console.log(color);

// // //function
//   function createRectangularPrism(
//     w,    // (number) the width
//     h,    // (number) the height
//     d,    // (number) the depth
//   )
//    { 
//     let result=w*h*d;
//     console.log(result);
//    }

//    createRectangularPrism (
//     5,
//     10,
//     2,
//   )

  
//   function myFunction(
//     p1,
//     p2,
//   ) 
//   { console.log(p1,p2); }
  
//   myFunction(
//     'arg1',
//     'arg2',
//   );


//   // ************
// // 6)

//Object.getOwnPropertyDescriptors()

// let ex = {a: 1, b: 2, c: 3, d:4};

//   let store=Object.getOwnPropertyDescriptors(ex);

//   console.log(store);


 // ************
// 7)
  //SharedArrayBuffer

//   let ex = new SharedArrayBuffer(5);
//   console.log(ex);



// // ************
// // 8)
// //Atomics object

// //Atomics object, which provides a set of static methods to perform atomic operations on SharedArrayBuffer.
