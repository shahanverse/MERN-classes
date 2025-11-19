
//  const square = (num) => num * num;

// console.log(square(2));  


//call back function 

function greet(name){
  console.log("hello" + name )
}

function user(callback) {
  callback('ann')
}

user(greet)