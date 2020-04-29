/**
 * http://usejsdoc.org/
 */

let a = 2;
const b = 2;
var c = 2;

if(true){
	let a = 3;
	const b = 3;
	var c = 3;
}

console.log(a);  //2
console.log(b);  //2
console.log(c);  //3

/* if you can see, the let and const had a new scope created inside a curly brace, but then, var doesn't
 * have a scope created inside an if statement, that's the reason the same global variable was redeclared 
 * inside an if, this is the major problem with the var, var is always global, if you want to create a
 * scope for a var, you need to declare it inside a function, thats when the scope is created for
 * var, else it is polluted and exposed to the outside world, with new es6 we don't have this problem,
 * since we stopped using var and started to use let and const*/



