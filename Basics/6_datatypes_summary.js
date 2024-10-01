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


//why we shouldn't use var
//because it doesn't follow scope conditions

let a = "a";
var b = "b";
const c = "c";

{
    let a = "x";
    var b = "y";
    const c  = "z";
}

console.log(a);       //a  ,a and c containing x and z destroyed after the scope ends
console.log(b);       //y  ,but b retains this value, this could lead to errors, so var is not used
console.log(c);       //c


//Memory
//Stack Memory for Primitive datatype, we get copy of object or variables
//Heap memory for Non-primitive, we get reference of original obj or variable any change changes original

//stack usage for String
let varA = "apple";
let varB = varA;
console.log(varB);   //apple

varB = "cat";
console.log(varA);      //apple , only the copy was changed not the original so varA is still apple
console.log(varB);     //cat

//heap usage for object
let objOne = {
    name: "apple",
    quantity: 5
};

let objTwo = objOne;

objTwo.name = "banana";

console.log(objOne.name);       //banana
console.log(objTwo.name);          //banana, since it got reference to the original location in heap, so it directly changes org val






