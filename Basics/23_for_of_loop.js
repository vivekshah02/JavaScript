//for of loops

const arr = [1, 2, 3, 4, 5];

for (const i of arr) {
    // console.log(i);        //1 2 3 4 5
}

const greetings = "Hello world!"
for(const greet of greetings){
    // console.log(`Each char is: ${greet}`);
}

//Maps        cannot use for in loop for maps
const map = new Map()
map.set('In', "India");
map.set('Np', "Nepal");
map.set('USA', "America");
map.set('In', "India");   //ignores it as it holds unique values

console.log(map);
//Map(3) { 'In' => 'India', 'Np' => 'Nepal', 'USA' => 'America' }

for(const i of map){
    console.log(i);
}
//[ 'In', 'India' ]  .....

for(const [key, value] of map){
    console.log(key + " -> " + value);
}
//In -> India ........

//-------------
const myObj ={
    'game1' : 'GTA',
    'game2': 'freefire'
}
for(const [key, value] of myObj){
    // console.log(key + " -> " + value); //obj not iterable
}