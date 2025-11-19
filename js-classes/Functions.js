
//  const square = (num) => num * num;

// console.log(square(2));  


//call back function 

// function greet(name){
//   console.log("hello " + name )
// }

// function user(callback) {
//   callback('ann')
// }

// user(greet)

// advanced array using call back

let nums = [1,2,3,4,5];
//for each 
nums.forEach(n => console.log(n));    // foreach cant create new or some , it only can ulter the elements in it

//map  can create another array 
let doubled = nums.map (n => n * 2 )
console.log(doubled)

//filter 

const num = nums.filter( n => n > 3)
console.log(num)

const even = nums.filter(n => n % 2 === 0 )
console.log(even)

const odd = nums.filter((n) => n % 2 !== 0);
console.log(odd);

//reduce 

const sum = nums.reduce((accumulator, val) => {
 return accumulator + val
},0)
  console.log(sum)
// acc-0  val-1  0 + 1  = 1
// acc-1  val-2  1 + 2  = 3
// acc-3  val-3  3 + 3  = 6
// acc-6



