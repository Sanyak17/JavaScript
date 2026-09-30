//high order array loops
//array specific loops

// ["", "", ""]// array having strings
// [{}, {}, {}]// array of objects

const arr=[1,2,3,4,5]
//for of loop--> no need of declaration, incrementing , easy to use
for (const i of arr) {
    console.log(i)
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps
//The Map object holds key-value pairs and remembers the original insertion order of the keys.
/*
Iteration happens in insertion order,
which corresponds to the order in which each key-value pair was first inserted into the map by the set() method 
*/
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);//returns an array 

for (const [key, value] of map) //destructuring the array 
{
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
for (const [key, value] of myObject) {
    //console.log(key, ':-', value);//err:myObject is not iterable
    
}

//go to four.js for more obje related info 