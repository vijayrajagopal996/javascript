/**
 * http://usejsdoc.org/
 */

let fruits = ['apple','mango','orange','strawberry'];

let colours = ['red','green','blue','voilet'];


function passThisToForEach(item,index){
	console.log(item,index);
}
fruits.forEach(passThisToForEach);

colours.forEach(passThisToForEach);

