//for in

const myObj ={
    'a': "apple",
    'b': "ball",
    'c': "cat"
}
for(const key in myObj){
    console.log(`${key} for ${myObj[key]}`);
}
//a for apple
//b for ball ...

const arr = ["a", "b", "c"]
for(const key in arr){
    console.log(key);            //0 1 2   (indexes)
    console.log(arr[key]);       //a b c
}


