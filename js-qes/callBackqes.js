1.
// const arr = [1,2,3,4,5]

// const result = arr
// .filter(n => n % 2 === 0 )
// .map(n => n * n)

// console.log(result)

2.

// const arr = [10, 60, 15, 90, 120];

// const result = arr.filter(n => n > 50).length;
// console.log(result)

3.
const arr = [10, 35, 90, 50, 75];

const secondLargest = arr.sort((a, b) => b - a)[1];
console.log(secondLargest)