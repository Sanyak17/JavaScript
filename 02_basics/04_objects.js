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

//console.log(regularUser.fullname.userfullname.firstname);

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

//console.log(tinderUser);
// console.log(Object.keys(tinderUser));// returns an array of keys
// console.log(Object.values(tinderUser));//returns an array of values
// /console.log(Object.entries(tinderUser));// returns an arr of all entries

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//tells if we have a property nameed isloggedin?


// ***************************************************************************//

//Object destructuring
const course = {
    coursename: "js ",
    price: 999,
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);// normal way
//object destructuring
const {courseInstructor:instructor}= course// what we did is we stored courseinstructor in a var named instructor and
//can print it however we like
console.log(instructor);
//whenever u see a {} , know that it is destructuring happening
//even arrays are also destructured but its rare



//API:some values are returned and how do u handle those values: earlier:xml(complex)  now:json is used
// json structure-key:value pair in which key is also a string-- it is showing error but there is no error here
// {
//     "name":"sanya",
//     "course":"js",
//     "place":"kanpur"
// }

// some times we get some api data in the form of arrays too
[
    {},
    {},
    {}
]
