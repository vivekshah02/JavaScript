// console.log(2>1);        //true

// console.log("1" > 2);      //false , autoconversion from string to number
// console.log(2 < "3");        //true


//for relational comparison operators (<, >, <=, >=) js converts null to number 0 though null means empty
//for == null is equal to null and undefined only

console.log(null > 0);   //false , 0>0
console.log(null == 0);   //false, null == 0
console.log(null >= 0);   //true, 0=0

console.log(undefined > 0);    //false
console.log(undefined >= 0);   //false
console.log(undefined == 0);   //false
console.log(null == undefined);   //true for null == undefined

//=== these are strict checks, in this datatype conversion doesn't happen

console.log("2" == 2);   //true
console.log("2"===2);   //false





