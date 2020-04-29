/**
 * http://usejsdoc.org/
 */

//Currying
const multiply = (a, b) => a * b
const curriedMultiply = (a) => (b) => a * b
curriedMultiply(5)(20)

// 10 years from now
const multiplyBy5 = curriedMultiply(5)
multiplyBy5(20)

/* the curriedMultiply(5) is run only once, and can use it to multiply with other numbers,
memory efficient code, as we are storing the state of 5 only once, and it is remebered forever, this
is coz of closures, but then we are running a extra bit just to multiply that 5 with the another number
the we are going to add */