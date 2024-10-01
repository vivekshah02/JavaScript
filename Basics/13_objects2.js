const User = new Object();      //singleton object, only one instance
const User2 = {};           //non singleton object, multiple instances
console.log(User);      //{}    ,object
console.log(User2);     //{}     ,object

User.id = "12abc"
User.name = "vivek"
User.isLoggedIN = false
console.log(User);           ////{ id: '12abc', name: 'vivek', isLoggedIN: false }

//------------------
const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vivek",
            lastname: "shah"
        }
    }
}
console.log(regularUser.fullname);              //{ userfullname: { firstname: 'vivek', lastname: 'shah' } }
console.log(regularUser.fullname.userfullname.firstname);         //vivek

//---------------------------
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// const obj3 = {obj1, obj2}
//output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);          //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj1);          //{ '1': 'a', '2': 'b' }
console.log(obj2);          //{ '3': 'a', '4': 'b' }



const obj4 = Object.assign(obj1, obj2);             //.assing(dest, src)
console.log(obj4);
//output:{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj1);
//output:{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj2);
//{ '3': 'a', '4': 'b' }

//-------------------
//spread operator

const objA = {1: "a", 2: "b"};
const objB = {3: "a", 4: "b"};
const objC = {...objA, ...objB}

console.log(objC);          //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(objA);          //{ '1': 'a', '2': 'b' }
console.log(objB);           //{ '3': 'a', '4': 'b' }



//------------------
const arrOfObjects = [
    {
        userId : 1,
        email: "1@gmail.com"
    },
    {
        userId : 2,
        email: "2@gmail.com"
    },
    {
        userId : 3,
        email: "3@gmail.com"
    }
];
console.log(arrOfObjects[1].userId);       //2

console.log(User);         //{ id: '12abc', name: 'vivek', isLoggedIN: false }
console.log(Object.keys(User));          //[ 'id', 'name', 'isLoggedIN' ]       ,array types
console.log(Object.values(User))           //[ '12abc', 'vivek', false ]       ,array type
console.log(Object.entries(User));        //[ [ 'id', '12abc' ], [ 'name', 'vivek' ], [ 'isLoggedIN', false ] ]

console.log(User.hasOwnProperty('isLoggedIN'));    //true
console.log(User.hasOwnProperty('isTrue'));    //false



//------------------------------------------
//De-structuring
const course ={
    coursename: "react",
    price: "1000",
    location: "pune"
}


console.log(course.location)    //pune

const {location} = course;     //directly accesing (DE_STRUCTRING -> curly brackets {})
console.log(location);      //pune

const {coursename: cname} = course;    //using other variable name is also allowed
console.log(cname);      //react

//-------------------------------
//APIs //apna kaam dusreke sar pe daal dena ~Chai Aur Code
//API Format : json format

// {
//     "name" : "vivek",
//     "mail" : "xyz@gmial.com",
//     "phone" : "234251245"
// }

//another example
// [
//     {},
//     {},
//     {}
// ]


// random user me api ::https://randomuser.me/
// json formatter (understanding json files)   :: https://jsonformatter.org/