/**
 * http://usejsdoc.org/
 */

/*  __proto__ is the actual object that is used in the lookup chain to resolve methods, etc. 
prototype is the object that is used to build __proto__ when you create an object with new: */

function Foo(){
	
}

console.log(( new Foo ).__proto__ === Foo.prototype);
console.log(( new Foo ).prototype === undefined);

console.log(Foo.__proto__.__proto__);


function Car(name,price){
	this.name = name;
	this.price = price;
}

var audi = new Car('audi',2000000);

console.log(audi.prototype);

/* Every function in javascript has this private property called __proto__, and this __proto__ has a scope chain 
till they reach the Object prototype, what i mean by this is, say for an instance you create some object, that 
object by default gets this private property __proto__ and this __proto__ of this object reference the parent
object called Object. let's take the above created Car Object as an example, we have created a function called Car, 
it should not only be a car always, this could be anything(Array, String, Date, etc...) this car function will
have a private property as we told before called __proto__ and this __proto__ inside a car points to the
Object prototype, let's discuss about prototype a little later, and if you also see that we have created the 
audi object, this audi object also gets the private property __proto__ which points to the Car Prototype, 
and again the __proto__ property inside the Car object points to Object prototype this goes on till we 
reach the Object prototype as Object is considered as the top level Object, and there can't be scope chain 
Beyond the Object, if we use __proto__ for the Object
it will be null always. Prototype is nothing but a constructor of an Object which is being referenced
by the __proto__ property inside the inheriting object for example a child object, javascript follows
prototype inheritance unlike any other languages out there like c#, java etc... */

/* one important thing that you all should know is the tyepof the main Object is a function, as i told you
 * this function will have a prototype which is used to create an object, it is very confusing
 * 
 * 
 */


console.log("Type of Array",typeof Array);
console.log("Type of Object",typeof Object);
console.log("Type of Date",typeof Date);
console.log("Type of String",typeof String);


/* to create objects of something above javascript uses something called prototype which is only available 
 * in functions, thus All the Top Objects(Array,Object,String,Date) are considered as function and 
 * that function will have a prototype property to really build an object of the same.
 * what i mean by this is, if you want to create an array object, we use the Array which is nothing but a 
 * function which has a prototype to build array objects
 * same goes for String, Object,Date, the moral is that the function is used to create an object of the same,
 * i know it is very confusing, but there isn't any easy way to explain this, functions are used to build
 * Objects since functions are nothing but a special constructor to instantiate an object.
 */

