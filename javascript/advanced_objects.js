// looping through objects

let obj = {
    'song0': 'i want it that way',
    'song1': 'american idiot',
    'song2': 'blank space',
    'song3': 'summer of 69'
}
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})