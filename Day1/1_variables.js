// variables and constants

const accountId = 12344
let accountEmail = "vivek@google.com"
var accountPassword = "1234"
accountCity = "Delhi"      //works without let but not recommended
let accountType;    //undefined not 0


/*
We should avoid using var because of
block scope and functional scope issue
*/

// accountId = 1234        //not allowed as it is a constant
console.log(accountId);

accountEmail = "vivek@ms.com"
accountPassword = "123"
accountCity = "Mumbai"

console.table([accountId, accountEmail, accountPassword, accountCity, accountType]);        //prints as a table
