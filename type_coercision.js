// double equality operator

console.log(1 == '1'); // true

console.log( +0 == -0); //true

console.log(null == undefined); //true

console.log(null == NaN);

console.log(NaN == undefined);

console.log( null == null);
console.log(undefined == undefined);

console.log(NaN == NaN);

console.log();
console.log();

// strict equality operator

console.log(1 === '1'); //fasle

console.log( +0 === -0); //true

console.log(null === undefined);

console.log(NaN === NaN);

/* if you see here, both the operators says that +0 and -0 is equals, i mean its true and for the  NaN and NaN it says it is not equal*/

// solution for NaN and +0,-0

console.log();
console.log();

console.log(Object.is(+0,-0));

console.log(Object.is(NaN,NaN));