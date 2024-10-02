//forEach looping


const languages = ["cpp", "python", "js", "java"];

// languages.forEach(function (item) {
//     console.log(item);

// })
//cpp python ...


// languages.forEach((val) => {       //using arrow function
//     console.log(val);
// })
//cpp python ...


function print(item){
    console.log(item);
}
//cpp python ...
languages.forEach(print);


languages.forEach( (item, index, arr) => {     //we get item, index, and whole array
    console.log(item, index, arr);
})
//cpp 0 [ 'cpp', 'python', 'js', 'java' ]
//python 1 [ 'cpp', 'python', 'js', 'java' ]  ...



//-------arr of obj
const lang = [
    {
        letter: "a",
        word: "apple"
    },
    {
        letter: "b",
        word: "ball"
    },
    {
        letter: "c",
        word: "cat"
    }
]

lang.forEach((item) => {
    console.log(item.word);

})
//apple
//ball
//cat