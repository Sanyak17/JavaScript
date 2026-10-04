function SetUsername(username){
    //complex DB calls
    this.username = username
    //so 'this' of this function will go off once the exec is over 
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername(username)// { email: 'chai@fb.com', password: '123' }// I dont know if setusername is called or not
    // so here we have only given refrrence and not called it , though due to the () it seems as if we had called it , but it is not the same case
    SetUsername.call(this, username)//pass a new this to hold that refrence
    //we can also call some methods explicitly like .call--> we have to hold the refrence so we use call
    //earlier what was happening we give username to setUsername - it sets it and doesnot holds the refrence of username and hence it gets lost
    //  and nothing prints on the outer function
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);//{ username: 'chai', email: 'chai@fb.com', password: '123' }
