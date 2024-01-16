// Closures: https://www.theodinproject.com/lessons/node-path-javascript-factory-functions-and-the-module-pattern
function makeAdding(firstNumber) {
    // "first" is scoped within the makeAdding function
    const first = firstNumber;
    return function resulting(secondNumber) {
        // "second" is scoped within the resulting function
        const second = secondNumber;
        return first + second;
    }
}
// but we've not seen an example of a "function"
// being returned, thus far - how do we use it?

const add5 = makeAdding(5);
console.log(add5(2)) // logs 7

// Factory Functions


const User = function (name) {
    this.name = name;
    this.discordName = "@" + name;
}
// hey, this is a constructor ^
// then this can be refactored into a factory!

/*function createUser (name) {
  const discordName = "@" + name;
  return { name, discordName };
}*/
// and that's very similar, except since it's just a function,
// we don't need a new keyword

function createUser(name) {
    const discordName = "@" + name;

    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;

    return { name, discordName, reputation, getReputation, giveReputation };
}

const nathan = createUser("nathan");
nathan.giveReputation();
nathan.giveReputation();

console.log({
    discordName: nathan.discordName,
    reputation: nathan.getReputation()
});

function createPlayer (name, level) {
    const user = createUser(name);
  
    const increaseLevel = () => level++;
    return Object.assign({}, user, { increaseLevel });
  }

console.log(createPlayer('NafanJ', 99))


// IIFEs
const calculator = (function () {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return { add, sub, mul, div };
  })();
  
  calculator.add(3,5); // 8
  calculator.sub(6,2); // 4
  calculator.mul(14,5534); // 77476
