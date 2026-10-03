//creating a promise
// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 500)
// })
// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

//Promise 2
//no need to always store in variables, can also be done like this -same as above
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

//Promise 3:
//passing data in arguments of resolve() which then() will recieve afterwards
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "santa", email: "santa@claus.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// promise 4:

promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error)
        {
            resolve({name:"Santa", phn_no:"123456789"})
        }
        else
        {
            reject("ERROR:something went wrong")
        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.name
})
.then((name)=>{
    console.log(name)
})
.catch(function(err){
    console.log(err)
})
.finally(function(){// always execute 
    console.log("done executing")
})
// ERROR:something went wrong --when error=true
// { name: 'Santa', phn_no: '123456789' }
// Santa -> when error=false


//promise 5:using async await
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()
