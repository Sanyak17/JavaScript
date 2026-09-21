// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);//false
console.log(null == 0);// false
console.log(null >= 0);//true
// this is beacuse js treats comparision and equality check differently, so null==0 is false whereas null>=0 is 
// true and null>0 is false


console.log(undefined == 0);// false
console.log(undefined > 0);// false
console.log(undefined < 0);//false
// avoid these type of comparisions
// === strict check: not only checks values but also datatype 

console.log("2" === 2);// false as datatype is different
console.log(2 === 2);// true
