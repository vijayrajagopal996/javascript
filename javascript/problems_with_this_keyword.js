const emp = {
  name : 'billy',
  bonus(){ 
    console.log('bonus',this); // emp object

    function specialBonus(){
      console.log('special bonus',this); // window object
    }
    return specialBonus;
  }
}

emp.bonus()();

/* why the function specialBonus() shows window when used this, because this function is not a method of object and is a normal regular function which will be defined outside of the emp object, that is the reason this inside this method points to window object.*/

//How do we solve the above, the special bonus should also be given to the same employee only.

// first way

const emp = {
  name : 'billy',
  bonus(){ 
    console.log('bonus',this); 

    function specialBonus(){
      console.log('special bonus',this); 
    }
    return specialBonus.bind(this);
  }
}

emp.bonus()();


// second way is to use the es6 arrow function

const emp = {
  name : 'billy',
  bonus() { 
    console.log('bonus',this); 

    // make the inner function as a arrow function
    var specialBonus = () => {
      console.log('special bonus',this); 
    }
    return specialBonus;
  }
}

emp.bonus()();

/// third approach
const emp = {
  name : 'billy',
  bonus() { 
    console.log('bonus',this); 
    var self = this;

    
    function specialBonus(){
      console.log('special bonus',self); 
    }
    return specialBonus;
  }
}

emp.bonus()();