//Js is dynamic language not static like Java; as because in js we do not explicitly mention datatype
//it is decided at runtime

//on the basis of how data is stored in and accessed from the memory, datatypes is of two types
//primitive and non-primitive

//Primitive: String, Number(includes floating point numbers), Boolean, null(explicitly set to null),
// undefined(i.e. does not exist, decalared but no value) Symbol(to make value unique), BigInt


const id = Symbol('123');
const studentId = Symbol('123');
console.log(id == studentId);    //false as Symbol means it is uniquely defined and is not same
console.log(id === studentId);    //false


const bigNumber =61465465465465465465465465n;      //'n' makes it bigint
console.log(typeof bigNumber);        //bigint


//Reference(Non primitive): Array, Objects, Functions
//Array
const fruits = ["Apple", "ball"];
console.log(typeof fruits);    //object

//Object
let myObj = {
    name : "Vivek",
    age : 21,
};
console.log(typeof myObj);     //object

//function
const myFun = function(){
    console.log("hello");

}
console.log(typeof myFun);    //function 

