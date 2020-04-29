const basket = ['oranges', 'apple', 'melon', 'grapes'];

const name = 'vijay';

const obj = {
    name: 'vijay',
    email: 'vij@g.com',
    age: 27
}

// normal for loop can be used with any iterables like string and arrays
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

// forEach is only for arrays
basket.forEach(item => item);

// for of can be used with any iterables 
for (item of basket) {
    console.log('for of', item);
}

for (item of name) {
    console.log('for of', item);
}

// for in can only be used with enumerables, but not iterables, meaning it can only loop through objects
for (item in obj) {
    console.log(item);
}
// but still for in can be used with arrays and strings like below,
// since array and object are internally objects
/* but there are so many confusions on this when it comes to for of and for in
in simple just aware that for of can be used with any iterables, and for in
can only be used with objects */
for (item in basket) {
    console.log(item);
}

for (item in name) {
    console.log(item);
}

