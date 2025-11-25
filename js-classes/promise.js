// promise -> its an object that manages async operrations
// // The promise object promise to return a value.
//    new promise ((resoleve,reject) =. {aynchronous function})


// let success = true ;

// let promise = new Promise((resolve,reject) => {
// if(success){
//   resolve('work done')
// }else{
//   reject('failure')
// }
// })

// promise
// .then((result) => {
//   console.log(result);
  
// })
// .catch((error) => {
//   console.log(error);
  
// })
// .finally(() => {
//   console.log('Completed');
  
// })

//promise all
  
// let p1 = Promise.resolve('file 1')
// let p2 = Promise.resolve('file 2')

// Promise.all([p1, p2]).then((results) => console.log(results))

//promise all settled

// let p1 = Promise.resolve("A")
// let p2 = Promise.reject('B')

// Promise.allSettled([p1, p2]).then((results) => console.log(results))

//promise race()

// let p1 = new Promise((res) => setTimeout(res, 200, 'Fast'))
// let p2 = new Promise((res) => setTimeout(res, 300, 'Slow'))

// Promise.race([p1, p2]).then((result) => console.log(result))

//promise any()

// let p1 = Promise.reject('A')
// let p2 = Promise.resolve('B') 
// let p3 = Promise.resolve('C')

// Promise.any([p1, p2, p3]).then((result) => console.log(result))



