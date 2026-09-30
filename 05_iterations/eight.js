//Reduce:reduce() processes all elements and reduces them into a single result.
//array.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, initialValue);
const myNums = [1, 2, 3]
let myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);

//OR
myTotal = myNums.reduce( function(acc, curr)
{
    console.log(`acc: ${acc} and currval: ${curr}`);
    return acc+curr
}, 0);
console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);