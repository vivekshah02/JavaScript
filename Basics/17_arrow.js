//global object inside broweser:: window object
const user = {
    username : "sam",
    price: 900,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);


    }
}
user.welcomeMessage()
// output
// sam, welcome to website
// {
//   username: 'sam',
//   price: 900,
//   welcomeMessage: [Function: welcomeMessage]
// }
user.username = "sammy";
user.welcomeMessage()         //same output format just name changed to sammy

console.log(this);           //{}, since no global context to refer to



//this keyword cannot be used inside a function for a variable declared inside the function
function check(){
    const num = 100;
    console.log(this.num);         //undefined
    console.log(this);            //lots of global objects




}
check()

const test = function() {
    const num = 100;
    console.log(this.num);         //undefined
    // this()              //error

}
test()


console.log("--------------ARROW fucntion------------");
const arrow = () => {
    const num = 100;
    console.log(this.num);        //undefined
    console.log(this);            //{}
}
arrow()


// const add = (num1, num2) =>{
//     return num1 + num2;            //3
// }

// const add = (num1, num2) => num1 + num2;        //3   , implicit return, no return keyword
const add = (num1, num2) => (num1 + num2);      //3,
console.log(add(1,2))


const username = () => ({username: "vivek"});
console.log(username())             //{username: "vivek"}

