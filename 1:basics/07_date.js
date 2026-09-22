//Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral 
// number that represents milliseconds since the midnight at the beginning of January 1, 1970

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate2 = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());// used vividly 
let myTimeStamp = Date.now()

// console.log(myTimeStamp);// milliseconds 
// console.log(myCreatedDate.getTime()); //used to extract value of that curr time in millisec as calc from jan 1 1970
// console.log(Math.floor(Date.now()/1000)); // to convert into seconds 
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
newDate.toLocaleString('default',
    {
        weekday:"long"
    })