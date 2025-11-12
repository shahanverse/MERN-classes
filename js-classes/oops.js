// class -> Template or blueprint of an object.
// object -> Instance of a class.

//-Camel Case firstNameOfUser
//-Pascal Case FirstName Of User

// Snake case first name of usen

// properties -> Variables

// methods-> Functions

// constructor function -> Special function that runs automatically when an object is created.

// this keyword -> refers to the current object. -> global object.

// Abstraction. hiding the implementation details.
// Encapsulation. wrapping up of data and functions into a single un
// Inheritance. The ability of a class to inherit properties and methods from another class.

// Polymorphism. The ability of an object to take on many forms.

// overloading> same function name but different number of parameters
// overriding -> same function name and same number of parameters.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age
//   }

//   display(){
//     console.log(`Name: ${this.name} And age: ${this.age}`)
//   }
// }

// const person1 = new Person('alice',30)
// person1.display()

// class Person {
//   constructor(name, age) {
//     this.name = name;           //inheritence
//     this.age = age;
//   }

//   display() {
//     console.log(`Name: ${this.name} And age: ${this.age}`);
//   }
// }

// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age);
//     this.grade = grade;
//   }

//   study() {
//     console.log(`Name: ${this.name} and Age: ${this.age} Grade: ${this.grade}`);
//   }
// }

// const student1 = new Student("Ann", 20, "B");
// student1.display();
// student1.study();

// polymorphism

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   display() {
//     console.log(`Hello, my name is ${this.name}.`);
//   }
// }
// class Student extends Person {
//   display() {
//     console.log(`my name is ${this.name}.`);
//   }
// }

// class Teacher extends Person {
//   display() {
//     console.log(`${this.name}.`);
//   }
// }

// const p1 = new Person("shahan");
// const s1 = new Student("jabin");
// const t1 = new Teacher("naja");

// p1.display()
// s1.display()
// t1.display()


// encapsulation
class Person {
  constructor(name, age){
    let _age = age
    this.name = name

    this.getAge = function () {
      return _age; // read
    }
    this.setAge = function(newAge){
      if(newAge > 0){
        _age = newAge
      }
      else {
        console.log('Invalid age')
      }
    }
  }
}

const person1 = new Person ('shahan', 20 )

console.log(person1.name ) // shahan
console.log(person1.getAge()); //20
person1.setAge(23);
console.log(person1.getAge());

// person1.Age   //error 