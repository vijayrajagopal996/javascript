// string padding
console.log('vijay'.padStart(10));
console.log('vijay'.padEnd(10));
/* these can be used for string alignment */

// trailing commas just to make the code look cleaner by putting commas
function test(a, b, c, d, e, ) {
    return a;
}

console.log(test(1, 2, 3, 4, 5));

// values 
let obj = {
    'song0': 'i want it that way',
    'song1': 'american idiot',
    'song2': 'blank space',
    'song3': 'summer of 69'
}

Object.values(obj).forEach((value) => {
    console.log(value);
});

// entries 
let obj2 = {
    'song0': 'i want it that way',
    'song1': 'american idiot',
    'song2': 'blank space',
    'song3': 'summer of 69'
}

Object.entries(obj).forEach((keyandvalue) => {
    console.log(keyandvalue);
});

//insert id of the username 
let dbValue = Object.entries(obj).map(value => {
    return value[1] + value[0].replace('song', '');
});

console.log(dbValue);


// Async Await
