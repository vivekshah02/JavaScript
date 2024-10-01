let name= "vivek";
let age = 21;

//console.log(name + age + " years");        //outdated not used

console.log(`My name is ${name} and I am ${age} years old`);     //string interpolation

const gameName = new String("vivek-shah");    //string object so has key value pair; 0->v , 1->i, 2->v, ..
                                 //has a lot of methods can be checked in browser console
console.log(gameName[0]);             //v
console.log(gameName.__proto__);

console.log(gameName.length);        //5
console.log(gameName.toUpperCase());    //since it is string using stack memory so original value is not changed
console.log(gameName);                //[String: 'vivek']
console.log(gameName.charAt(3));       //e
console.log(gameName.indexOf("k"));     //4
const sub = gameName.substring(0,3);         //viv   , doesn't include 3 only upto 3-1=2;
console.log(sub);

// console.log(gameName.slice(0,4));      //vive , 4 characters from postion 0
console.log(gameName.slice(-1,-2));        //not working


const str = "        vivek     ";
console.log(str);             //        vivek
console.log(str.trim());           //vivek


const url = "user%20two@gmail.com";
console.log(url.replace('%20', '-'));         //user-20@gmail.com
console.log(url.includes("two"));             //true

console.log(url.split('@'));           //[ 'user%20two', 'gmail.com' ]
