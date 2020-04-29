/**
 * http://usejsdoc.org/
 */

/* say i want to multiply 5 times some numbers, it need not be only one, it could be array of numbers*/

// first way of doing it is by currying
const multiplyBy5UsingCurrying = (a) => (b) => (c) => a*b*c;
console.log(multiplyBy5UsingCurrying(5)(4)(6));
/* but currying can take only one parameter and argument at the same time, we cannot add
 * array of numbers to multiply by 5, say if you want 10 numbers to be multiplied by 5, you have to write 10
 * closures functions or nested functions or lambdas like above. */


//second of doing it is by bind or partial application
/* this is the most recommended way of doing it, and it is memory efficient than currying */

const multiplyBy5UsingBindOrPartialApplication = (a,b,c) => a*b*c;
const partialApplication = multiplyBy5UsingBindOrPartialApplication.bind(null,5,4,6);
console.log(partialApplication())
