// fibonacci

// function fib(n){
//   if (n === 0) return 0
//   if (n === 1) return 1

//   return fib(n - 1) + fib( n - 2)
// }

// console.log(fib(10));



const memo = {}

function fibonacci(n){

  if(n<1){
    return n;
  }

  if (memo[n]){
    return memo[n]
  }

  memo[n] = fibonacci(n-1) +fibonacci (n-2)
  return memo[n]

}
console.log(fibonacci(5));
console.log(fibonacci(5))

