//creating the map
// const person = new Map ();

// person.set(101,'shahan')
// person.set(102,'jabin')
// person.set(103,'naja')

// function getStudentsName(roll) {

//   return person.get(roll) || "students not found"
// }

// console.log(getStudentsName(101))

// const country  = new Map();

// country.set('IN','INDIA')
// country.set('US', 'AMERICA')

// function getName(short){
//   return country.get(short) || 'not found'
// }

// console.log(getName('IN'))

// const products = new Map()

// products.set('p1', 400)
// products.set('p2', 200)
// products.set('p3', 100)

// const cart = ['p1','p2']

// let total = 0 ;

// for (let id of cart) {
//   total += products.get(id)
// }

// console.log('Total bill', total)

// const sentence = ' i love coding because coding is mind relaxing'

// const words = sentence.split(" ")
// const wordCount = new Map()

// for (let word of words){
//   if(wordCount.has(word)) {
//     wordCount.set(word, wordCount.get(word) + 1 )
// }else{
//   wordCount.set(word, 1)
// }
// }
// console.log(wordCount)

const clicks = new Map();

function click(buttonName) {
  if (clicks.has(buttonName)) {
    clicks.set(buttonName, clicks.get(buttonName) + 1);
  } else {
    clicks.set(buttonName, 1);
  }
  console.log(buttonName, "clicked", clicks.get(buttonName), "times");
}
click("like");
click("like");
click("subscribe");
click("like");
click("subscribe");
