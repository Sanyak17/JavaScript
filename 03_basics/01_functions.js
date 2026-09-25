// function is the keyword here and name is the name of my function 
function name()
{
    console.log("S")
    console.log("A")
    console.log("N")
    console.log("Y")
    console.log("A")
}

//name();
// name- this is the refrence of my function and when i add() that is me executing my function

// func to add 2 nums
function add(a,b)// here i am at the function definition so  it is parameters
{
    // res=a+b
    //return res
    return a+b;
}
//console.log(add(10,15));// here i am calling that func and passing those values so they are arguments
//console.log(add(10,"15"));

//more ways to take values in a funct
function loginuser(name="santa"){//also here we can have a default value for name //in case we dont prvide a value it will use it otherwise it will be overridden
    if(name===undefined)
    {
        console.log("enter name")
        return;
    }
    return `${name} logged in` 
}
console.log(loginuser());// no values passed so op is: undefined logged in
//console.log(loginuser(SANYA));

function calculateCartPrice(val1, val2, ...num1){ // takes 200in val1, 400 in val2 and rest in nums1
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);// here in place of price if i write prices it will print undefined
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

