const myArr = [0,1,2,3,4,5, true, "vivek"]          //different types of elemetnts are also allowed
                                                    //resizable array

console.log(myArr[7]);        //vivek

const myArr2 = new Array(1,2,3,4)

//array methods

myArr.push(6);
console.log(myArr);         //[ 0, 1, 2, 3, 4, 5, true, 'vivek', 6 ]

myArr.pop();
console.log(myArr);     //[ 0, 1, 2, 3, 4, 5, true, 'vivek']

myArr.unshift(9);       //inserts 9 at first place (can be used for todo list)
console.log(myArr);    //[ 9, 0, 1, 2, 3, 4, 5, true, 'vivek' ]

myArr.shift();                  //removes first element
console.log(myArr);

console.log(myArr.includes(5));               //true,        result boolean type
console.log(myArr.indexOf('vivek'));          //7 (8th position)
console.log(myArr.indexOf(14));                 //-1 (not present in the array)


const newArr = myArr.join();          //join makes new array as string type

console.log("------");
console.log(myArr);
console.log(typeof myArr);           //object

console.log(newArr);              //0,1,2,3,4,5,true,vivek
console.log(typeof newArr);      //string

console.log("------");

console.log("A: ", myArr);        //A:  [ 0, 1, 2, 3, 4, 5, true, 'vivek' ]
const a1 = myArr.slice(1,3);        //just prints value, doesnt modify org array
console.log(a1);                 //[1,2]     prints from (a,b)  index a to b-1

console.log("B: ", myArr);       //B:  [ 0, 1, 2, 3, 4, 5, true, 'vivek' ]
const a2 = myArr.splice(1,3);    //removes these indices from original array
console.log(a2);                 //[1,2,3]       prints from (a,b) index a to b, removes these from org array

console.log("C: ", myArr);       //C:  [ 0, 4, 5, true, 'vivek' ]
