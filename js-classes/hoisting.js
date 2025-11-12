//hoisting: variables and functions can be acces before it initialized

// javascript moves variable and function decilarations to the top of their scope


console.log(x);
var x = 10;


// var x ;
// console.log(x);  // undefined
// x = 10;

// let  const 

console.log(y) ;  //ReferenceError: cannot access “y” before initialisation
//temporal dead zone
let y = 20 ; 


// funstion is fully hoisting

display()

 function display () {
 console.log('hi')
}