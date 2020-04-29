/**
 * http://usejsdoc.org/
 */


let a = 'hello';

const b = 'hello';

a = 2;


console.log(a);
console.log(b);

//b = 1; //TypeError: Assignment to constant variable

const c = new String();

c = new Number(); // you cannot change the reference in the case of objects, if you are using const