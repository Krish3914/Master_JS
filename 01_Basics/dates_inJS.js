// Dates in JS
// StartDate = 01-01-1970         i.e. 01-Jan-1970

let myDate = new Date();
// console.log(myDate);
// console.log(typeof(myDate));
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());

// let birthDate = new Date(2004,6,26);
// let birthDate = new Date(2004,6,26,15,3,9,7);
// let birthDate = new Date("2024-11-24");
let birthDate = new Date("11-21-2023");        //MM-DD-YYYY
// console.log(birthDate);
// // console.log(birthDate.toDateString());
// console.log(birthDate.toLocaleString());


//Time-Stamp
let myTimestamp = Date.now();
// console.log(myTimestamp);        //total milisec from 01-Jan-1970 till now
// console.log(birthDate.getTime()); //total milisec from start till birthDate

// console.log(Math.floor(Date.now()/1000));     //total seconds from start till current date.

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// console.log(newDate.getTimezoneOffset());
// console.log(newDate.toTimeString());
// console.log(newDate[Symbol.toPrimitive]('string'));

// console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`);


console.log(newDate.toLocaleString('default', {
    weekday: "long",
    // timeZone:''   
}));