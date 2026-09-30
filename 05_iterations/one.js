//for loop
for (let i = 0; i < 10; i++) {
    const element = i;//not available outside this scope
    //console.log(element);
    
}
for (let i = 1; i <= 10; i++) 
{
    //console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++)
        {
            //console.log(`Inner loop value ${j} and inner loop ${i}`);
            //console.log(i + '*' + j + ' = ' + i*j );
        }
    
}

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++)
{//if i<=arr.length: no out of bound Exception only prints an extra undefined
    //const element = myArray[index];
    //console.log(element);
    
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break// prints detected 5 and then moves the control out of the for loop
    }
    console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue// detects and prints detected 5 and then continues for next iteration of i
    }
    console.log(`Value of i is ${index}`);
    
}
