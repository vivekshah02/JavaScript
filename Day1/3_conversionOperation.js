//datatype conversion

console.log("Conversion to Number");

let score = "33a";

console.log(typeof score);           //string
//console.log(typeof (score))        //string       ;as a method

let valueInNum = Number(score);
console.log(typeof valueInNum);    //number
console.log(valueInNum);           //Nan (not a number because of a), still shows type number

/* Type conversion to number
"33" -> 33  (type number)
"33a"  -> NaN (type number)
true -> 1   , false -> 0
null -> 0
undefined -> Nan
*/



console.log("Conversion to Boolean")

let isLoggedIn = 1;
let boolIsLoggedIn = Boolean(isLoggedIn);
console.log(boolIsLoggedIn);
console.log(typeof boolIsLoggedIn);


/*
1 -> true
0 -> false
"hello" -> true
""  -> false
null,undefined ->false
*/



console.log("Conversion to String");
let num = 10;
let stringNum = String(num);
console.log(stringNum);
console.log(typeof stringNum);        //string


//true, null, undefined -> same but type string

