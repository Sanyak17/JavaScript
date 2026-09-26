const user = {
    username: "sanya",
    price: 999,

    welcomeMessage: function() {
        //console.log(`${this.username} , welcome to website`);
        //console.log(this);
    }

}
user.welcomeMessage()
user.username = "santa"
user.welcomeMessage()
//console.log(this)//{} this is node environment and it is a empty object -> no  context in global

//console.log(this)//on browser via inspect--> Window: browser m jo global object h vo h window object 

// so now printing this in a function
// function one()
// {
//     console.log(this);
// }
//one();// now we get too many values like global ,microtask , fetch etc etc

// function two()
// {
//     usename="Sanya "
//     console.log(this.username);//undefined-- this is working fine in objects but not in functions
// }
// two()



// --------------------arrow functions---------------------

// diff way of declaring a function
// const chai = function () {
//     let username = "santa"
//     console.log(this.username);
// }
// for arrow func remove the function keyword and add => 
    //  () => {}
const abc = ()=> {
    let username = "santa"
//     console.log(this.username);
//     console.log(this);
}
abc();

// const addTwo = (num1, num2) => {//explicit return -we have to use {} and return keyword
//     return num1 + num2
// }
// const addTwo1 = (num1, num2) =>  num1 + num2//implicit return 

// const addTwo = (num1, num2) => ( num1 + num2 )

//{} wrap kia to return keyword likhna pdega

const addTwo = (num1, num2) => {return {username: "hitesh"}}
//OR
//const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3, 4))