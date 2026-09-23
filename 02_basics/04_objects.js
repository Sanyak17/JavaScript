// const tinderUser = new Object()// singleton 
const tinderUser = {}// non singleton
// console.log(tinderUser);
// these both methods create the same object, the only difference is the first one creates a singleton object 

tinderUser.id = "123ab"
tinderUser.name = "Santa"
tinderUser.isLoggedIn = false

//console.log(tinderUser)
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "santa",
            lastname: "claus"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

//merging objects
//The Object.assign() static method copies all enumerable own properties 
// from one or more source objects to a target object. It returns the modified target object.
//Object.assign(target, source1, source2, /* …, */ sourceN)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = Object.assign({}, obj1, obj2, obj4)// take empty arr as target to put everything into it
// most used
const obj3 = {...obj1, ...obj2}// spread operator
// console.log(obj3);

console.log(tinderUser);
// console.log(Object.keys(tinderUser));// returns an array of keys
// console.log(Object.values(tinderUser));//returns an array of values
// /console.log(Object.entries(tinderUser));// returns an arr of all entries

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//tells if we have a property nameed isloggedin?
