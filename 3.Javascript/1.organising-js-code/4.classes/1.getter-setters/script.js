let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ")
    }
}

console.log(user.fullName)
user.fullName = 'Alice Cooper'
console.log(user.fullName)


// Accessor Descriptors 
/* 
Descriptors for accessor properties are different from those for data properties.

For accessor properties, there is no value or writable, but instead there are get and set functions.

That is, an accessor descriptor may have:

get – a function without arguments, that works when a property is read,
set – a function with one argument, that is called when the property is set,
enumerable – same as for data properties,
configurable – same as for data properties.
*/

let car = {
    name: 'Mustang',
    mileage: 19999
};

Object.defineProperty(car, 'carDetails', {
    get(){
        return `${this.name} ${this.mileage}`
    },

    set(value){
        [this.name, this.mileage] = value.split(" ")
    }
})

console.log(car.carDetails)

for (let key in car) console.log(key)

// Smart getters/setters
let person = {
    get name() {
      return this._name;
    },
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short, need at least 4 characters");
        return;
      }
      this._name = value;
    }
  };
  
  person.name = "Pete";
  console.log(person.name); // Pete
  
  person.name = "";
  console.log(person.name); // Pete
