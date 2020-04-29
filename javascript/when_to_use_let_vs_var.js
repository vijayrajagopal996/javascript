/* let creates a block scope, and it is better to use inside for loop */

for (let i = 0; i < 5; i++) { };


/* var is when you want to declare a variable to a function scope */
if (true) {
    var a = 'hai';
}
console.log(a);

if (true) {
    let b = 'hai';
}

console.log(b) // reference error

/* some people say let is to replace var, but i dont agree to that, we need
to use both of them */

// let keyword doesn't allow hoisting
