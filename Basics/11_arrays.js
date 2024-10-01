const marvel = ["Thor", "Ironman", "Captain America"]
const dc = ["superman", "flash", "batman"]
// marvel.push(dc);
// console.log(marvel);        //adds whole array as a new element
/*[
    'Thor',
    'Ironman',
    'Captain America',
    [ 'superman', 'flash', 'batman' ]
  ]
*/

// console.log(marvel[3][2]);       //batman

//-------------------
//cloning an array
const clonedc = [...dc]
const clonemarvel = [...marvel]

const all_heroes = clonemarvel.concat(clonedc)
console.log(all_heroes);        //[ 'Thor', 'Ironman', 'Captain America', 'superman', 'flash', 'batman' ]


//spread operator [...xyz]
const all_new_heroes = [...clonemarvel, ...clonedc]
console.log(all_new_heroes);   //[ 'Thor', 'Ironman', 'Captain America', 'superman', 'flash', 'batman' ]


//syntax: flat(depth)  :: depth to which the array must be flattend
//flat(Infinity) :: for all depth
const arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const arr2 = arr.flat(2);
console.log(arr2);
//[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Apple"));
//false

console.log(Array.from("Apple"));
//[ 'A', 'p', 'p', 'l', 'e' ]

console.log(Array.from({name: "vivek"}));
//[]    :  cannnot make arrray out of it

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
//[100, 200, 300]
