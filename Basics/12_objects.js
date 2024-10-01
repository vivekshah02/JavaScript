//singleton object (one of the type object)
//Object.create    //constructor

//object literals

const mySym = Symbol("key")        //declaring a symbol

const JsUser = {
    name: "Vivek",
    "full name": "Vivek Shah",
    [mySym] : "key1",               //using symbol as a key in an object
    age: 20,
    location: "Nepal",
    email: "xyz@gmail.com",
    isLoggedIn : false,
    lastLogIn : ["Monday", "Saturday"]
}

console.log(JsUser.email);       //xyz@gmail.com     : email is string
console.log(JsUser["email"]);    //xyz@gmail.com

// console.log(JsUser."full name");     //cannot use this
console.log(JsUser["full name"]);    //Vivek Shah

console.log(JsUser[mySym]);      //key1,   no "" around mySym, mySym is symbol not string

JsUser.email = "vivek@gmail.com"    //changing value of email key
// Object.freeze(JsUser);             //cannnot change value of JsUser object anymore
JsUser.email = "shah@gmail.com"        //deesnt change though no error
console.log(JsUser["email"]);         //vivek@gmial.com

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);   //string interpolation
}


// console.log(JsUser.greeting);         //[Function (anonymous)]
console.log(JsUser.greeting());      //Hello JS User,,, (after unfreezing object first)

console.log(JsUser.greeting2());     //Hello Js User, Vivek




