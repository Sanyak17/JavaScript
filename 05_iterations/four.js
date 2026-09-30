const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
//we know that for-of loop does not work for objects --use for in loop
for (const key in myObject) 
{
    //console.log(key);//prints all keys 

}
for(const key in myObject)
{
    //console.log(myObject[key])
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(key);//pints all indexes
    //console.log(programming[key]);//prints all values
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}

//maps are not iterable hence these for-in and for-of loops dont work here 