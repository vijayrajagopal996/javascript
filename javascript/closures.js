/**
 * http://usejsdoc.org/
 */

function invitation(){
	return function (people){
		return JSON.stringify(people);
	}
}

console.log(invitation()(new Array(4).fill("invitation letter")));


/* closures always returns a function, and the variables in the returning function is 
retained in some storage even after the function gets executed, */

/* what i mean is, when the function is executed all its variables in stack memory and references 
in heap memory gets lost, but still these things are retained or backed up  some where in 
some storage space, that storage space is nothing but a closure. */
