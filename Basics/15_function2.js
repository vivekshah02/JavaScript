function calculateCartPrice(num1){
    return num1;
}
console.log(calculateCartPrice(200,300,400));      //200, only first value is taken


//... is rest operator ;; it takes all values and returns an array
function calculateCartPrice2(...num1){
    return num1;
}

console.log(calculateCartPrice2(200,300,400));      //[200,300,400],  all values are returned as array


function calculateCartPrice3(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice3(200,300,400, 500));   //[400, 500], only 3rd and 4th values

//------------------------passing object in fucntion
const user = {
      username: "Rahul",
      price: 200
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);       //Username is Rahul and price is 200

handleObject({          //Username is raha and price is 500
    username: "raha",
    price: 500
})

//--------------------passing array in function
const myArray = [100, 200, 300, 400];
function returnSecondVal(array){
    return array[1];
}
console.log(returnSecondVal(myArray));                 //200
console.log(returnSecondVal([100,200,300,400]));       //200


