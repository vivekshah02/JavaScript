const arr = [1, 2, 3 ]

const initial = 0;
let total = arr.reduce( function (acc, curVal) {
    // console.log(`Accumulator: ${acc}, current value: ${curVal}`)
    return acc + curVal
}, initial)       //here 0 is intial value
// Accumulator: 0, current value: 1
// Accumulator: 1, current value: 2
// Accumulator: 3, current value: 3

console.log(total);     //6

// total = arr.reduce ( (acc, curVal) => acc+curVal, initial)
total = arr.reduce ( (acc, curVal) => {return acc+curVal}, initial)

console.log(total);   //6

//--------------------------
const shoppingCart = [
    {itemname: "react",
    price: 500},
    {itemname: "js",
    price: 1000},
    {itemname: "java",
    price: 1500},
    {itemname: "html",
    price: 2000}
]

const totalSum = shoppingCart.reduce((acc,item) => acc + item.price, 0 )
console.log(totalSum); //5000
