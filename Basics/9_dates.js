let myDate = new Date()        //myDate is object
console.log(myDate);                      //2024-09-09T16:31:48.819Z
console.log(myDate.toString()) ;         //Mon Sep 09 2024 22:00:29 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());      //Mon Sep 09 2024
console.log(myDate.toJSON());            //2024-09-09T16:32:28.971Z
console.log(myDate.toLocaleString());     //9/9/2024, 10:05:15 pm
console.log(myDate.toLocaleDateString());    //9/9/2024
console.log(myDate.toISOString());         //2024-09-09T16:35:15.019Z
console.log(typeof myDate);             //object

let myCreatedDate = new Date(2023, 0, 23);         //month starts from 0 as it is array
console.log(myCreatedDate.toDateString());        //Mon Jan 23 2023

let myCreatedDate2 = new Date(2023, 0, 23, 5, 7);
console.log(myCreatedDate2.toLocaleString());        //23/1/2023, 5:07:00 am

let myCreatedDate3 = new Date("2023-1-18");       //YYYY-MM-DD  , 18/1/2023, 12:00:00 am
console.log(myCreatedDate3.toLocaleString());        //for this format, jan is 1

let myCreatedDate4 = new Date("4-23-2022");         //MM-DD-YYYY,    23/1/2023, 12:00:00 am
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();         //1725900325219, long millisecond value since year 1970
console.log(myTimeStamp);

console.log(myCreatedDate4.getTime());  // 1650652200000

console.log(Math.floor(Date.now()/1000));    //1725900560, value in seconds

let newDate = new Date();
console.log(newDate);

console.log(newDate.getMonth());        //8, for september(9th month)      (0 to 11)
console.log(newDate.getDay());           //1, for monday   (0-sunday, 6-saturday)

console.log(newDate.getMonth()+1);        //9,  for user understandibility

//interpolation
console.log(`${newDate.getMonth()+1}th month of year ${newDate.getFullYear()}`)
//9th month of year 2024

console.log(newDate.toLocaleString('default', {
    year : "numeric",
    weekday: "long",
    month :"long",
    day: "2-digit"
                              //Monday 09 September, 2024
})

);