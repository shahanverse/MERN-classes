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

class Person {
  constructor(name, age) {
    this.name = name;           //inheritence
    this.age = age;
  }

  display() {
    console.log(`Name: ${this.name} And age: ${this.age}`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`Name: ${this.name} and Age: ${this.age} Grade: ${this.grade}`);
  }
}

const student1 = new Student("Ann", 20, "B");
student1.display();
student1.study();
