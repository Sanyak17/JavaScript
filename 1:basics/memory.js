// Stack (Primitive) u get a copy of the declared variable

let myname="sanya";//primitive -string so stack allocation , a copy will be shared 
let names=myname;
names="santa";
console.log(myname);// sanya contains teh old value still
console.log(names); //santa

//Heap (Non-Primitive) - we always get a refrence of the original value; any changes made to that refrence 
// changes the original value

let userone={
    email:"user@gmail.com",
    upi:"user@ybl",
}

let usertwo=userone;
usertwo.email="sanya@user.com";
console.log(userone.email);
console.log(usertwo.email);

/*

*/