/**
 * http://usejsdoc.org/
 */


let obj = {}

let func = function(){
	return "hello";
}

console.log(obj.__proto__);

console.log(func.__proto__);

console.log(func.__proto__.__proto__);

console.log(func.__proto__.__proto__.__proto__);

console.log(Function.prototype);

console.log(Object.prototype);

console.log(typeof obj);

console.log(typeof func);

console.log(typeof Function);

console.log(typeof Object);
