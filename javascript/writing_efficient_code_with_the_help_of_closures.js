/**
 * http://usejsdoc.org/
 */

// normal function 

function heavyDuty(item) {
  const bigArray = new Array(7000).fill('😄')
  console.log('created!');
  return bigArray[item]
}

heavyDuty(699);
heavyDuty(699);
heavyDuty(699);
const getHeavyDuty = heavyDuty2();
getHeavyDuty(699)
getHeavyDuty(699)
getHeavyDuty(699)

//heavyDuty2()(699);
//heavyDuty2()(699);
//heavyDuty2()(699);


// but i dont want to pollute the global namespace..
// closures 
function heavyDuty2() {
  const bigArray = new Array(7000).fill('😄')
  console.log('created Again!')
  return function(item) {
    return bigArray[item]
  }
}

// this is how you can write a memory efficient code using closures.
// the array is created only once, no memory is wasted or time wasted in here.
