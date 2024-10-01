//falsy values------------------
//false, 0, -0, BigInt 0n, "", null, undefined, nan

//all other values are truthy values
//"0", 'false', " ", [], {}, function(){}

const username =function(){};
if(username){
    console.log("true");     //gets executed

}

const arr = []
if(arr.length === 0){
    console.log("array is empty");
}

const obj = {}
if(Object.keys(obj).length === 0){         //object.keys() returns an array
    console.log("empty object");

}

//--------------------------
//Nullish Coalescing Operator (??) used for null, undefined
//used when a value is returned from somewhere

let val1;
// val1 = 5 ?? 10      //val1 = 5
// val1 = null ?? 10      //val1 = 10
// val1 = undefined ?? 2     //val1 = 2
val1 = undefined ?? 4 ?? 5       //val1 = 4, first val is taken

console.log(val1);


//ternary operator:      condition?true:false
2==3 ? console.log("true") : console.log("false");         //false

