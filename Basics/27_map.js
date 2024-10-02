const myNum = [1, 2 , 3, 4, 5, 6, 7, 8, 9]

let added = myNum.map( (val) => val+10);


added = myNum.map( (val) => {
    return val+10;
});
console.log(added);     // [11, 12, 13, 14, 15,16, 17, 18, 19] both case

//using forEach
added = myNum.forEach( (val) => {
    console.log(val+10);
})
//11 12 13 14 ...


//chaining
//map : all cases are returned
//filter: only true cases are returned
const newNum = myNum              //1 2 3 4 5
                .map( (num) => num*10)      //10 20 30
                .map( (num) => num+1)     //11 21 31 41
                .filter( (num) => num>=40)      //41 51 61 71 ..

console.log(newNum);      //[ 41, 51, 61, 71, 81, 91 ]


//