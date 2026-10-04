// let myName = "hitesh     "
// let mychannel = "chai     "

//truelength is a property that gives the true length after removing all the extra spaces at end-- eg:myname.trim().length()
// console.log(myName.trueLength);
let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);//by using 'this', this function knows that i am talking about this spiderman only
    }
}
Object.prototype.santa=function()
{
    console.log(`this is santa func of heropower`)
}
// heroPower.santa();//heroPower.santa is not a function
//so it can be done if I could directly inject this funtion in the Object
// Object.prototype.santa=function()
// {
//     console.log(`this is santa func of heropower`)
// } here it wont work , declare before calling

// so now if this is injected in my Object's prototype and everything goes through object so array should also have this
myHeros.santa()//works fine
//this function is now available to anything and everything that passes through Object 

//so what have we done here? we have accessed the top level heirarchy and have added a new property in that Object and can be accessed 
// by anyone using it

Array.prototype.heysanta= function()
{
    console.log(`i am santa of array's prototype`)
}
myHeros.heysanta()//i am santa of array's prototype
// nice nice nice

heroPower.heysanta()// heroPower.heysanta is not a function
//good this should not have the access -- because we have given access to array and not object 

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
const User = {
    name: "chai",
    email: "chai@google.com"
}
Teacher.__proto__ = User//this is how you can anyone else's properties

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)// TeachingSupport to access properties of Teacher

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()