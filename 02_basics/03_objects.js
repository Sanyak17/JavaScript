//2 ways to create an object- via constructor and via object literal
// // singleton- when created via constructor a singleton object is created
// other ways- not a singleton object but multiple instances can be created-- when created like literals
// constructor-- Object.create();


const mySym = Symbol("key1")


const JsUser={
    name: "Santa",
    "last name":"katiyar",
    [mySym]:"my new key",
    age: 22,
    loc: "Delhi",
    email:"sanyakst@mail.com"
};
// to access any object , no need to just use .operator , we can accesss it by dot operator but a better would be:

console.log(JsUser.age);
console.log(JsUser["loc"]);// this is better 
// why ?
// so to explain why that is better lets add a new key:value pair - "last name":"katiyar"  now u can never access this lastname using dot operator;
console.log(JsUser["last name"]);
//console.log(JsUser."last name"); //cant write that now
// console.log(JsUser.mySym);// working fine but here the datatype is string but we needed symbol
//console.log(typeof(JsUser.mySym));
// so top access it like a symbol use[]
console.log(JsUser[mySym]);
console.log(typeof(JsUser[mySym]));

//we can also freeze any object or property to prevent it from editing 
// after freezing when u edit a value , it wont show any error but will not reflect changes
//JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"

// declaring functions
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greeting();
//console.log(JsUser.greeting());//undefined coz no return type of func 

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);// refering to name of jsuser

}
JsUser.greetingTwo();