// 1. square only the even numbers
// const arr = [1,2,3,4,5]

// const result = arr
// .filter(n => n % 2 === 0 )
// .map(n => n * n)

// console.log(result)

2.// count how many numbers are greater than 50

// const arr = [10, 60, 15, 90, 120];

// const result = arr.filter(n => n > 50).length;
// console.log(result)

3.// Finst the second largest number
// const arr = [10, 35, 90, 50, 75];

// const secondLargest = arr.sort((a, b) => b - a)[1];
// console.log(secondLargest)

4.// Find the sum of all even numbers
// const arr = [5, 10, 15, 20, 25, 30]

// const sum = arr
// .filter(n => n % 2 === 0 )
// .reduce((acc, cur) => acc + cur , 0)
// console.log(sum)

5.// convert array of words into a sentence
// const arr = ['javascript', 'is', 'awesome']

// const join = arr.join(' ');

// console.log(join);

6.// Return only unique numbers ( filter + indexOf)
// const arr = [1, 2, 2, 3, 4, 4, 5];

// const unique = arr.filter((num, index) => arr.indexOf(num) === index )
// console.log(unique);

7. // Count occurrences of each element(reduce)
// const arr = ["a", "b", "a", "c", "b", "a"];

// const counts = arr.reduce((acc,cur ) => {
//   acc[cur] = (acc[cur] || 0 ) + 1
//   return acc
// }, {})
// console.log(counts);

8.// Find the longest word(reduce)

// const arr = ["apple", "papaya", "mango", "watermelon"];

// const longest = arr.reduce((word, long) => 
//   word.length > long.length ? word : long
// )
// console.log(longest);

9.//Multiply each number by its index(map)

// const arr = [5, 10, 15]

// const mul = arr.map((num, index) => num * index )
// console.log(mul);

10.// Find product of all numbers(reduce)

// const arr = [2, 3, 4];

// const product = arr.reduce((acc, cur) => acc * cur)
// console.log(product);

11.// Reverse each string(map + split + reverse)

// const arr = ['abhi', 'riya', 'hello']

// const reverse = arr.map(str =>
//   str.split("").reverse().join('')
// )
// console.log(reverse);

12.// Convert array of objects into full names (map)

// const arr = [
//   { fname: "Abhi", lname: "K" },
//   { fname: "Riya", lname: "S" },
// ];

// const join = arr.map( obj => obj.fname + ' ' + obj.lname)
// console.log(join);

13.// Find total marks of students (reduce)

// const arr = [
//   { name: "A", mark: 50 },
//   { name: "B", mark: 70 },
//   { name: "C", mark: 40 },
// ];

// const total = arr.reduce((acc, cur) => acc + cur.mark, 0)
// console.log(total);



