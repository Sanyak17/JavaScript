//Map:map() creates a new array by transforming every element.
//const squares = nums.map((num) => num * num);

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})
//chaining-- one methods result is passed onto another function as input
const newNums = myNumers.map((num) => num * 10 ).map( (num) => num + 1).filter( (num) => num >= 20)

console.log(newNums);