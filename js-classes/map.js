/// map :  A map is a collection of key-value pairs. 
//         unlike object , keys in a map can be any type
//         (string, number , object , function, etc..)
//         map maintain the order fo inserction.


// map exp:

let person = new map() ;

//person.set('key', 'value')

//add key value
person.set("name", "abhi")
person.set(true, "boolean");

//access
console.log(person.get('name'))
console.log(person.get('true'))

//check
conosle.log(person.has('age')) //false

//size
console.log(person.size)