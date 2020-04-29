/**
 * http://usejsdoc.org/
 */

Object.prototype.sayName = function(){
	return "Hi Vijay this function is inside Object"
}


var test = {};
console.log(test.sayName());

// see we have added a method to the Object itself, and this method can be reused by me anywhere within this project

