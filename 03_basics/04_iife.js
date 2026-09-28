/*IIFE = Immediately Invoked Function Expression
It is a function that is created and executed immediately, without needing to call it separately later.
eg-
(function () {
    console.log("Hello");
})();
instead of:
function greet() {
    console.log("Hello");
}
greet();
JavaScript normally interprets:
function greet() {
    console.log("Hello");
}
as a function declaration.
But we want it to be treated as a function expression.
So we wrap it:
(function greet() {
    console.log("Hello");
});
Now JavaScript sees the function as an expression.
((name) => {
    console.log(`Hello ${name}`);
})("Santa");
()()- first is for func definition , second is call 

*/


(function chai(){//named iife
    console.log(`DB CONNECTED`);
})();//here semicolon is imp to tell where to stop

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )("santa")