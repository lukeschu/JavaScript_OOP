console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
  addHobby(newHobby) {
    this.hobbies.push(newHobby);
  }
  removeHobby(oldHobby) {
    this.hobbies.forEach((element, index) => {
      if (element == oldHobby) this.hobbies.splice(index, 1);
    });
  }
  greeting() {
    console.log("Greetings, humanoid.");
  }
  info() {}
}
console.log(Person);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Developer";
  }
  greeting() {
    console.log("Bleep bleep bloopety bloop!");
  }
}

console.log(Coder);
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

const myPerson = new Person("Luke", 1, "Garden Hwy", [
  "Kicking Ass",
  "Chewing Bubble Gum",
]);
myPerson.addHobby("Slaying Dragons");
myPerson.removeHobby("Chewing Bubble Gum");
console.log(myPerson);
myPerson.greeting();

const myCoder = new Coder("Duke", "2", "Elm Street", [
  "Lollygagging",
  "Tomfoolery",
]);

myCoder.addHobby("Gambling");

console.log(myCoder);
myCoder.greeting();

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {
  result = 0;

  add(a, b) {
    this.result = a + b;
    return this.result;
  }
  subtract(a, b) {
    this.result = a - b;
    return this.result;
  }
  multiply(a, b) {
    this.result = a * b;
    return this.result;
  }
  divide(a, b) {
    this.result = a / b;
    return this.result;
  }
  display() {
    console.log(this.result);
  }
}

let newCalc = new Calculator();

newCalc.add(2, 7);
newCalc.display();
newCalc.multiply(7, 7);
newCalc.display();
