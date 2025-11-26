// Async/Await = Async -> Makes a function return a promise 
//               Await -> Makes a async function wait for a promise

//  it allows you to write asynchronous code in a synchronous manner 
//  Async doesn't have resolve or reject parameters

// function Task1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Task1 completed");
//     }, 3000);
//   });
// }
// function Task2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Task2 completed");
//     }, 1000);
//   });
// }
// function Task3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Task3 completed");
//     }, 2000);
//   });
// }

// async function runTask() {

//   try {
//     const result1 = await Task1()
//     console.log(result1);

//     const result2 = await Task2()
//     console.log(result2);
    
//     const result3 = await Task3()
//     console.log(result3);
    
    
//   } catch (error) {
//     console.log(error);
    
//   }
  
// }

// runTask()

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(response);
    const output = document.getElementById("output");
      output.innerHTML = data
        .map((user) => `<p>${user.name} - ${user.email}</p>`)
        .join("");
  } catch (error) {
    console.log(error);
  }
}

fetchData()


