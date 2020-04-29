/**
 * http://usejsdoc.org/
 */

// Synchronous

console.log(10);
console.log(20);
console.log(30);

/* in the above code executes by line by line, first it prints 10, then 20, then so on...,
this is basically how synchronous code works, but if you look at this code carefully, you
may notice that each statement has to wait for one another to execute the code, say if i want 
20 to be executed first not 10, this is not possible in synchronous code, as the second statement
has to wait till the first statement completes, that means 20 has to wait for 10 to get executed, this
is kind of blocking code, it's like  you enter a interview room, where you will have to wait for
the first person who has gone inside the room and you wait for him to come, this is blocking code, this is
where asynchronous comes in to picture, asynchronous solves these kind of problems */

// setTimeout is one  by which we can achieve asynchronous

/* to understand about asynchronous code, you first need to understand what are web apis, callback queue,
event loop */

//Asynchronous 

console.log(20);
setTimeout(()=>console.log(10));
console.log(30);

/* web apis are nothing but an apis which are not provided by javascript engine, it could be a thirdparty 
apis, doms, ajax, these are all considered as web apis, when javascript comes across any of these apis
it handovers that piece of code to the web api handler, and it continues execution until the stack is 
complete, later when web api finishes it's task, how is that we bring that piece of code again to the stack,
javascript is always worried about stack, if there is anything on stack or heap it starts to process, if not
it wont, as we said before the web api completion status is not known to javascript engine, but what
makes the web api completed task to bring it upon stack, event loop is what does this, i forget to tell onething
if there are any web apis those piece will be moved to call back queue, to bring that piece of code from 
call back queue to stack, we need event loops, this way we can make our javascript non blocking, it doesn't
mean javascript is multithreaded, still it is single threaded only, but we can achieve the same that we have
been achieving in multithreaded using event loop and callback queues, you may take a look at the pdf
file under pic which is on your left, to understand more about asynchronous with diagrams */



/*  examples where you can use asynchronous call, say you have load all your posts of twitter before the user
logs in, instead of waiting for the load to happen, booking cabs on uber, multiple users can book a cab,
instead of waiting for one person to book and wait till he completes, database calls, api calls, these are
some examples where asynchronous could occur */