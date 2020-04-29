// flat

/* flat can be used on arrays */

let array1 = [1, 2, 3, 4, 5];
console.log(array1.flat()); //nothing happens here actually

// but if you have a nested arrays, in your code, see how you can use flat

let array2 = [1, [2, 3], [4, 5]];
console.log(array2.flat());

// but what if we have deep nested arrays
let array3 = [1, 2, [3, 4, [5]]];
console.log(array3.flat());

/* if you see array3, it has not completely flattened, for this to work you need
to tell how many layers to be flattened by passing a property to the flat function, the
default is 1, but you can change this with your values like below */

let array4 = [1, 2, [3, 4, [5]]];
console.log(array3.flat(2));// here i said two layer to be flattened

//change your rubbish code to clean neat code with flat like below
let entries = ['bob', 'mark', , , , , , 'sam'];
console.log(entries.flat());

let flatMap = array4.flatMap(item => {
    return item + 1;
});

console.log('flatMap', flatMap); // it layers only one level

//trim start
const userName = '                     vijay';
const email = 'vijayraj                  ';

console.log(userName);
console.log(email);
console.log(userName.trimStart());
console.log(email.trimEnd());

//form entries
let userProfiles = [['a', 1], ['b', 2], ['c', 3], ['d', 4]];
//let result = Object.formEntries(userProfiles);

/* it converts key value pairs into an objects with this method */

//console.log(Object.entries(userProfiles));

// try catch block update
try {
    bob + 'hi';
} catch {
    console.log('you messed up your code');
}
/* earlier it was mandatory to pass in the error object to the catch function,
like catch(error), but in es10, you are not forced to have the error object */

