//Immediately Invoked Function Expressions (IIFE)
//function which gets executed immediately
//problem arises from global scope pollution of variables, so to remove that iife is used


(function iife_test(){              //named iifi because it has name as iife_test
    console.log(`DB CONNECTED`);
})();             //(function)()  <- second one for execution
//; is needed in upper codee


//using arrow function
((name) => {
    console.log(`DB connnected 2 for ${name}`)
})("vivek")