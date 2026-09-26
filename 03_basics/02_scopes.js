// let a=10;
// const b=20;
// var c=30;

// console.log(a);// no issues will print normally
// console.log(b);
// console.log(c);

let a=300;
if(true)
{
let a=10;
const b=20;
//console.log("inner:" , a)// here a=10 outside=300
var c=30;//has a global scope wherever declared 
}
//console.log(a);//here err: a is not defined--> means let has a block scope
//console.log(b);//here err: a is not defined--> means const also  has a block scope
//console.log(c);// it worked fine which is not good, i shouldnot be able to access c outside that block 

//console.log(a);


//////////////////////////
//nested scopes

function one(){
    const username = "hitesh"

    function two(){// two can access one's methods and var 
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);//error- website is not defined

    two()

}
//one()// hitesh


if (true) {
    const username = "santa"
    if (username === "santa") {
        const website = " youtube"
        // console.log(username + website);// santa youtube
    }
    // console.log(website);//err
}

// console.log(username);//errr

console.log(addone(5))//this works fine

function addone(num){
    return num + 1
}



addTwo(5)// can't call this func here as wrong before initialization 
//function expressions
const addTwo = function(num){
    return num + 2
}

//Function declarations are hoisted with their complete function definition, whereas let/const function expressions are hoisted only as bindings and remain 
// in the Temporal Dead Zone until initialization.