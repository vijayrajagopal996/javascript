let dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    return 5
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`
    }
  }
}

let lizard = {
  name: 'Kiki',
  fight() {
    return 1
  }
}

/* we can use the methods of the object in another object using bind method,
 * but if you look at the program above, we don't have fire property in lizard object, 
 * we have to manually write it as we cannot use variables using bind, this is where prototype comes in,
 * prototype is just like inheriting completely from an object to another.
 */

/* Prototype chain 
 *                     Object
 *                     ^    ^
 *                     |    |
 *                Function  Array
 * 
 * */

// prototype inheritance
const lizardFire =dragon.sing.bind(lizard)
console.log("bind:",lizardFire()) //undefined

lizard.__proto__ = dragon;
dragon.isPrototypeOf(lizard);
console.log(lizard.fire)
console.log(lizard.sing())
