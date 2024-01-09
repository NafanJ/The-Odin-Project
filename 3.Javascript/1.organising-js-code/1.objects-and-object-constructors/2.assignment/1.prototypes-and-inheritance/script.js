function Hero(name, level){
    this.name = name;
    this.level = level;
}

// Call function
// Copy over properties from one constructor into another constructor.
function Warrior(name, level, weapon){
    //Chain construcor with call
    Hero.call(this, name, level);
    //Add a new property
    this.weapon = weapon
}

// Initialize Healer constructor
function Healer(name, level, spell) {
    Hero.call(this, name, level);
  
    this.spell = spell;
  }

  // Link prototypes and add prototype methods
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Hero.prototype.greet = function(){
    return `${this.name} says hello.`
}

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}

const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');
console.log(Object.getPrototypeOf(hero1))
console.log(Object.getPrototypeOf(hero2))

console.log(hero1.attack())
console.log(hero2.heal())
console.log(hero2.greet())