// function sum(...numbers) {
//   let total = 0 
//   for ( let n of numbers) {
//     total += n
//   }
//   return total
// }

// console.log(sum(10,20,40,50));

// const arr = [ 10,30, 50, 70, 90 ];

// const [a,b,...num] = arr ;
// console.log(a)
// console.log(b);
// console.log(num);

// const user = {
//   name: 'shahan' ,
//   age:33,
//   place: 'calicut',
//   role: 'Admin'

// }

// const {name, ...details} = user

// console.log(name);
// console.log(details)


// //spread

// const arr1 = [2,3,4,5,6]
// const arr2 = [... arr1]

// console.log(arr2)


// const a1 = [2,6]
// const a2 = [9,4]

// const a3 = [...a1, ...a2]

// console.log(a3);


// function add(...rest) {
//   return rest.reduce((sum, n) => sum + n, 0);
// }

// const spread = [2, 3, 4, 5];

// console.log(add(...spread));

 

// merge two object   

// const obj1 = { a: 1 };
// const obj2 = { b: 2 };

// const merged = { ...obj1, ...obj2 };

// console.log(merged);



//Synchronous operation

// console.log('First');
// console.log('Second');
// console.log('Third');

//Asynchronous program

// console.log('loading');
// setTimeout(() => {
//   console.log('Data loaded')
// },2000)
// console.log('Ended')






// The program must follow these conditions:

// 1. The user registration consists of multiple steps that must run one after another.

// 2. First, print "Registering user...".

// 3. Then simulate saving the user to a database using setTimeout with a 2-second delay. (just    print)

// 4. After saving, it should print:
//    "User saved: { name: 'john', email: 'john@example.com' }".

// 5. After the user is saved, simulate sending a welcome email using another setTimeout with a 1-            second delay.
//    It should print:
//    "Welcome email sent to: john@example.com".

// 6. After both actions are done, print:
//    "REGISTRATION COMPLETED ".

// You must use callbacks to manage the sequence


//Answer

function saveUser(user, callback){

  console.log('Registering User')

  setTimeout(() => {
    console.log(`User saved { name:${user.name} email: ${user.email}}`)
    callback()
  }, 2000);
}

function sendUserEmail(email,callback) {
  setTimeout(() => {
    console.log(`Welcome email sent to: ${email}`)
    callback()
  }, 1000);
}



function registerUser() {
  const user = { name:'shahan', email:'shahanverse@gmail.com'}
  saveUser(user , () => {
    sendUserEmail(user.email, () => {
      console.log('REGISTRATION COMPLETED')
    })
  })
}
registerUser()