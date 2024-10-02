const coding = ["cpp", "python", "js", "java"];

const values = coding.forEach((item) => {
    // console.log(item);         //cpp python ......
    return item
});

// console.log(values);        //undefined   , as forEach doenst return a value


//------------------filter          ,returns value
const myNum = [1, 2, 3, 4, 5]
// const newNum = myNum.filter( (num) => num>3 )

// const newNum = myNum.filter( (num) => {
//     return num > 3;
// })

//using forEach
const newNum = [];
myNum.forEach( (num) => {
    if(num>3){
        newNum.push(num);
    }
})
// console.log(newNum);       //[4, 5]  ,all cases


const books = [
    {title: 'Book One', genre: 'Fiction', publish : 1981, edition:2004},
    {title: 'Book two', genre: 'non-Fiction', publish : 1984, edition:2005},
    {title: 'Book three', genre: 'history', publish : 1987, edition:2006},
    {title: 'Book four', genre: 'science', publish : 1989, edition:2009},
    {title: 'Book five', genre: 'Fiction', publish : 1990, edition:2010}
];

let userBooks = books.filter( (bk) => bk.genre === "history");
// console.log(userBooks);
// [
// {title: 'Book three',genre: 'history',publish: 1987, edition: 2006}
// ]

userBooks = books.filter( (bk) => {
    return (bk.edition >= 2006 && bk.genre == "science")
})
console.log(userBooks);
// [
// {title: 'Book four',genre: 'science',publish: 1989,edition: 2009},
// ]


