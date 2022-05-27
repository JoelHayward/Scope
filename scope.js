// //initialize
// let a = 10;

// //Re-Declaration
// let c = 'apple'
// //let c = 'banana'

// //Re-assignment
// let e = 'red'

// e = 'blue'

// let a = 10;

// function house() {
//   let  a = 20;
// }

// console.log(a);
// house()

// let myName = "Reuben";
// function sayHi() {
//   let myName = "Obama";
//   console.log(myName + " says good morning.");
//   function sayHi2() {
//     console.log(myName + " says good morning again");
//   }
// }
// sayHi();
// sayHi2();

// let myName = "Reuben"
// function sayHi(){
// let myName= "Obama";
// console.log(myName + 'says good morning.')
// sayHi2();
// function sayHi2(){
// console.log(myName + 'says good morning again');
// }
// }
// sayHi();

let myName = "Reuben";
function sayHi() {
  let myName = "Obama";
  console.log(myName + "says good morning.");
  function sayHi2() {
    console.log(myName + "says good morning again");
  }
  function sayHi3() {
    let myName = "Jacinda";
    sayHi2();
  }
  sayHi3();
}
sayHi();
