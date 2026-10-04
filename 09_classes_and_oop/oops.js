// const user = {
//     username: "santa",
//     loginCount: 5,
//     signedIn: true,

//     getUserDetails: function(){
//         //console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);//refers to current context
//     }

// }



// console.log(user.username)//santa

// console.log(user.getUserDetails());//output:
// {
//   username: 'santa',
//   loginCount: 5,
//   signedIn: true,
//   getUserDetails: [Function: getUserDetails]
// }
// undefined

// console.log(this);//{} coz this is outside the function/user -- this is global context-- this gc can change
//but when same thing is run in console of browser it prints window


//Constructor function:
// const promiseOne=new Promise()
//this new keyword is constructor function here -it allows us to make multiple instances of the same object literal

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    // return this
}

// const userOne = User("santa", 1102, true)
// const userTwo = User("ChaiAurCode", 11, false)//it will overwrite the values of userone because no new keyword hence the same instance is edited
// console.log(userOne)

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);//[Function: User]
// console.log(userTwo);
