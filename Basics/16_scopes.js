//--------block scope
if(true){
    // console.log(a);

    let a = 10;           //10 as block(local) scope has more priority than global
    const b =20;
    var c = 30;
}
// console.log(a);
// console.log(b);
console.log(c);        //printing 30 so doesnt follow block scope. so var is not used as it may create problems

//---------------------global scope
let x = 10
{
    console.log(x);  //10 global

    x=20;
    console.log(x);   //20 block

}
console.log(x);
//20 as value of global variable is changed in block(allowed only as it was not redeclared)



//------------------------------if it is redeclared
let z = 10
{
    // console.log(z);  //not allowed as it is declared below so cannot access global variable

    let z=20;
    console.log(z);   //20 local value

}
console.log(z);   //10 global value as global value was  not changed



//--------(NESTED FUNCTION) Functional Scope
one();                             // works
function one(){
    const name = "javascript";
    function two(){
        const website = "youtube";
        console.log(name);
    }
    // console.log(website);    //block scope so not available out of scope
    two();
}
one();         //it works



//--------------(CLOSURE) to access inner function from outside
//even though inner function is called later i.e. after execution of outer function
//it still retains global variable

// inner();          doesnt work as inner is a variable which isnot decalared until this line
function one(){
    const name = "javascript";
    function two(){
        const website = "youtube";
        console.log(name);
    }
    // console.log(website);    //block scope so not available out of scope
    return two;
}
const inner = one();
inner();            //javascript
