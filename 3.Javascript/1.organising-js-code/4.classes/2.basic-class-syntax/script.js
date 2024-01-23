// Basic ES6 Syntax
/*
class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
*/

// new MyClass() to create new object

class User {
    constructor(name){
        this.name = name
    }

    sayHi(){
        console.log(`Hi, my name is ${this.name}`)
    }

    get name(){
        return this._name;
    }

    set name(value){
        if (value.length < 4){
            console.log('Name too short')
            return;
        }
        this._name = value;
    }
}

let user = new User('Monty')
user.sayHi();

console.log(`Getting ${user.name}`)

new User('James').sayHi();

// What is a class?
console.log(typeof User) // Function

/*
What class User {...} construct really does is:

Creates a function named User, that becomes the result of the class declaration. 
The function code is taken from the constructor method (assumed empty if we don’t write such method).
Stores class methods, such as sayHi, in User.prototype. It's just a Prototype, lets goooo
*/

// We can make classes dynamically
function makeClass(phrase) {
    // declare a class and return it
    return class {
      sayHi() {
        console.log(phrase);
      }
    };
  }
  
  // Create a new class
  let sonic = makeClass("Hello, I'm Sonic");
  
  new sonic().sayHi(); // Hello


  /*
  class MyClass {
  prop = value; // property

  constructor(...) { // constructor
    // ...
  }

  method(...) {} // method

  get something(...) {} // getter method
  set something(...) {} // setter method

  [Symbol.iterator]() {} // method with computed name (symbol here)
  // ...
}
  */