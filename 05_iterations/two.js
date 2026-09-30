//while and do while
let index = 0
while (index <= 10) {
    //console.log(`Value of index is ${index}`);
    index = index + 2
}

let myArr = ['flash', "batman", "superman","thor"]
let arr = 0
while (arr < myArr.length) {
    //console.log(`Value is ${myArr[arr]}`);
    arr = arr + 1
}

//do-while: first do the work and then check any condition

score=11
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);
//it checks the condition later and executes first and hence one time the loop is for sure executed evenif the condition is wrong initially
