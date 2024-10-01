function sayMyName(){
    console.log("Hello");

}
sayMyName()          //hello //sayMyName - function reference only

function addTwo(num1, num2){          //num1, num2 are parameters
    console.log(num1 + num2);
    // return num1 + num2;
}

addTwo()          //Nan
addTwo(2,3);      //5            //here 2, 3 are arguements

addTwo(2, "3");  //23
addTwo("2", 3);    //23
addTwo("2", "3");     //23

function loginMessage(username){
    console.log(`${username} just logged in`);
}
loginMessage("vivek");       //vivek just logged in
loginMessage("");           //just logged in
loginMessage();             //undefined just logged in

//use default values
function loginMessage2(username = "UserX"){
    console.log(`${username} just logged in`);
}
loginMessage2();       //UserX just logged in


function loginMessage3(username){
    if(!username){                      //username === undefined,  this can also be used
        console.log("Please enter user name");
        return;
    }
    console.log(`${username} just logged in`);
}
loginMessage3()             //Please enter user name
