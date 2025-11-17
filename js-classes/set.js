// set : collection of uniqye values.
//.      it does not allow duplicates and
//       the order of insertion is maintained.

const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2);

console.log(mySet)

console.log(mySet.has(3))

console.log(mySet.delete(2))

console.log(mySet)

console.log(mySet.size)

const numbers = [ 1,1,2,3,4,4,5,6]
const unique = [... new Set(numbers)]
console.log(unique)