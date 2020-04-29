/**
 * http://usejsdoc.org/
 */

let obj = {
		name : 'vijay',
		sayHello : function(){
			console.log('hello');
		}
}

// https://www.cs.usfca.edu/~galles/visualization/OpenHash.html
// refer to the above link to play around hash table.

/* when it comes to hash table data structures, the lookup, search, delete,insert everything is faster
but there are cases if the two objects have the hash code, there would be a collision, i mean hash collision,
at this point of time, the hash table data structure takes some amount of time to store the data, as it 
needs to create a pointer from the first object to the second one, you could refer to the image in this folder
to see the how the pointer is created when there is a hash collision, but dont worry our computer
is good enough to handle that for us, but being a developer you should
be knowing this*/

/* say when you have let hashtable = new HashTable(50); , i think
size of 50 seems to be a good resolution for hash collision, say if
we have new HashTable(12), this would not be great resolution for
hash collision, since there are so many pointers needs to be created, but
so not worry, our computer is well enough to handle these sizes for us,based on
bit system we have in our computer or laptop */


/* the one main drawback of the hash table is it is unordered unlike arrays, and it is
very slow, if we want to grab all the keys in it, as it has to go through
loop for all the data that are stored in it. */
