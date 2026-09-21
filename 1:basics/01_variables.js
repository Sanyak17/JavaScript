const accId=123443
let accEmail="sanya@1234"
var accPass="123456"
accCity="Kanpur"

// accId=2 //not allowed as const cant be changed
accEmail="abc@gmail.com";
accPass="98765";
accCity="delhi";
/*
prefer not to usse var 
because of functional and block scope problem
*/
let accState;
console.log(accId);
console.table([accId,accEmail,accPass,accCity,accState]);
