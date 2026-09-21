let score = "sanya"
//console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof(valueInNumber));
// console.log(valueInNumber)

let score2 =null;
let valueInNumber2 = Number(score2)
// console.log(typeof(score2));
// console.log(typeof(valueInNumber2));
// console.log(valueInNumber2)

score=null
//console.log(typeof(score));

score2 =undefined;
 valueInNumber2 = Number(score2)
// console.log(typeof(score2));
// console.log(typeof(valueInNumber2));
// console.log(valueInNumber2)


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


let isLoggedIn = "santa"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "santa" => true

let num=123;
let str=String(num);
// console.log(typeof str);
// console.log(str);


// *********************** Operations ***********************
let val=34;
let negval=-val;
//console.log(negval);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello "
let str2 = "sanya"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(typeof ("1" + 2));
console.log(typeof (1 + "2"));
console.log(typeof ("1" + 2 + 2)); //should have been  14
console.log(typeof (1 + 2 + "2"));// why not 122


let gameCounter = 100
++gameCounter;
console.log(gameCounter);
// study pre and post inc and dec
