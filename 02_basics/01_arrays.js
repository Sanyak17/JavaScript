// Javascript's arr are resizable, you can add multiple datatypes in one array unlike java, zero indexed, array copy operations create shallow copies
// shallow copies - share the same refrence point, any change made in the code reflects on the original doc

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
//myArr.unshift(9) // used to add like here 9 in the front of arr but not a good option as we have to shift all elements 
//myArr.shift()  // removes one element from the start



// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()// converts to string

// console.log(myArr);
// console.log( newArr);
// console.log(typeof(newArr))

// methods:slice and splice
//The primary difference between slice() and splice() in JavaScript is that slice() copies elements into a new array without modifying the original array, 
// whereas splice() modifies the original array by adding, removing, or replacing elements
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)// 3 is not included
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)// 3 is included
console.log(myn2);
console.log("C ", myArr);


