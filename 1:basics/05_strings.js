const name = "Sanya"
const repoCount = 5

// console.log(name + repoCount + " Value");// outdated version
// now we use backticks- string interpolation using ``and $
// String interpolation embeds variables and expressions directly inside a string  literal to build dynamic text.
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//string declaration usng new keyword
const plac=new String("Kanpur")

//console.log(plac.length);
// console.log(plac.toUpperCase());
const place=new String("Santa claus")
console.log(place.length)
// use substring , .charAt(),indexOf(), lastIndexOf()
const url = "https://hitesh.com/hitesh%20choudhary"
const gameName = new String('hitesh-hc-com')
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))
console.log(gameName.split('-')); 
console.log(gameName.bold());
