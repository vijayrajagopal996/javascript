/**
 * http://usejsdoc.org/
 */

//let a, b, rest;
//[a, b] = [10, 20];
//
//console.log(a);
//// expected output: 10
//
//console.log(b);
//// expected output: 20
//
//[a, b, ...rest] = [10, 20, 30, 40, 50];
//
//console.log(rest);
//// expected output: Array [30,40,50]

// for arrays

let a,b = 2;

console.log('1:',a,b); //a is undefined and b is 2

//[a,b] = 2;
//
//console.log(a,b);

[a,b] = [2];
console.log('2:',a,b);

[a,b] = [2,2];
console.log('3:',a,b);

//Destructuring assignment can be best used for swapping 2 numbers without temp variable

let x = 20; y = 30;
[x,y] = [x,y] = [y,x];
console.log('x:',x,'y:',y);



// for Objects
let {c, d} = {c:20,d:40};
console.log('4:',c,d);
