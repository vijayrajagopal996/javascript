/**
 * http://usejsdoc.org/
 */

const strings= ['a', 'b', 'c', 'd'];
const numbers = [1,2,3,4,5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.


//push
strings.push('e'); //O(1)

//pop
strings.pop(); //O(1)
strings.pop();

//unshift
strings.unshift('x') //O(n)

//splice
strings.splice(2, 0, 'alien');  //O(n)

console.log(strings)

/* arrays are very faster when it comes to lookup or search, push, pop, but when you want to insert
a data at middle or delete at middle, arrays are very slower */

/* O(1) means faster and O(n) means slower */