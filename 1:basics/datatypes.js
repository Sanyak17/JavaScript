//  Primitive datatypes:
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// Call by Value: original refrence to the memory is not given, a copy is given and changes made to that 
// is restricted to that copy only and doesnot affect the original refrence






// Reference (Non primitive)
// Array, Objects, Functions


const bigNumber = 3456543576654356754n
const myFunction = function(){
    console.log("Hello world")
};

console.log(typeof bigNumber);
console.log(typeof(myFunction));

// JavaScript is dynamically or statically typed?
/*JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you
do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.
For example, in JavaScript, you can do the following:
let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the 
type checking is done at compile-time, before the code is executed.
Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type 
explicitly when declaring them:*/ 