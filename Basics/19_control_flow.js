//if
if( 2=="2"){
         //gets executed, as type is not checked
}

if( 2==="2"){
    //doesnt get executed , as type is checked which is not same
}

if( 1!="1"){
      //false            , as type is not checked

}

if( 1!=="1"){
    //true            , as type is also checked
}
else{
    console.log("false part");

}

//operators
// >, <, >=, <=, ==, !=, === checks type as well, !== strictly not equal

const balance = 500
if(balance > 100) console.log("gets excuted"), console.log("also gets executed");


if(balance < 200){
}else if(balance > 400){
    console.log("gets excuted");
}


//-------------------------
const userLoggedIn = true;
const debitCard = true;
const loggedInFromEmail = true;
const loggedInFromGoogle = false;
if(userLoggedIn && debitCard){           //and &&
    console.log("Allowed to buy");      //gets executed
}

if(loggedInFromEmail || loggedInFromGoogle){        //or ||
    console.log("logged in");        //gets executed

}