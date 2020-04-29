/**
 * http://usejsdoc.org/
 */

// callback queue - Task queue
setTimeout(()=>{console.log('1', 'is the loneliest number')}, 0)
setTimeout(()=>{console.log('2', 'can be as bad as one')}, 10)

//2 Job Queue - Microtask Queue
Promise.resolve('hi').then((data)=> console.log('2', data))

//3
console.log('3','is a crowd')

/* event loop checks the job queue before it check the callback queue  as job queue has higher
 * priority than callback queue
 */