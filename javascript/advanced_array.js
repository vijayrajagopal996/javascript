/**
 * http://usejsdoc.org/
 */

// forEach
const numbers = [1,2,3,4,5,6,7,8,9];

const result = []
const evenNumbers = numbers.forEach((item)=> {
	if(item % 2 === 0){
		result.push(item);
	}
	
});

console.log('forEach',result);

/* forEach just iterates over the array, it doesn't do much, if we need to do some actions on the items, we
need to do it and return the array manually by ourselves, this could be solved using map */

// map
const resultMap = numbers.map(num => {
	return num % 2 === 0 ? num : 'odd';
});

console.log('map', resultMap);

/* map returns the array unlike forEach, but then still you need to be careful, it checks for all the
numbers in this case, if there is no match in condition it just returns undefined unlike forEach, see
which would be best fit for your code */

/* say you need a function to return new array unlike foreach and not the store the value 
 * of the rejected ones unlike map, there is something that we could use for this case, it's nothing
other than filter function */

const resultFilter = numbers.filter(num => {
	return num % 2 === 0;
});

console.log('filter',resultFilter);


// reduce
const resultReduce = numbers.reduce((accumulator,num) => {
	return accumulator + num;
},0);

console.log('reduce', resultReduce);

/* reduce can be used if you want to pass in some extra parameter and 
 * use that parameter to do calculations with array item, how to pass an extra parameter?, well, the
 * answer is accumulator */
