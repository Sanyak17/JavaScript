//for-each loop
const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach( function (val){// this is a callback function -no name
//     console.log(val);
// } )

//arrow functions: ()=>{}
// coding.forEach((item)=>{
//     console.log(item)
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)// here we need to pass only the refrence , not printME()-this is execution

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
} )