const score = 300;
// console.log(score);

const hard_num = new Number(350);
// console.log(hard_num);

// console.log(hard_num.toString());
// console.log(typeof(hard_num.toString()));
// console.log(typeof(hard_num));
// console.log(hard_num.toString().indexOf('5').toFixed(1));

// console.log(hard_num.toFixed(2));  //precision after decimal

const hard_m = 7223.89987
// console.log(hard_m.toPrecision(3)); //precision of total digits start from beginnning;

const price = 7000000;
// console.log(price.toLocaleString());
// console.log(price.toLocaleString('en-US'));





//+++++++++++++++-------Maths--------+++++++++++++

// In JS, maths is already built-in, and a  powerful library in javascript.
console.log(Math);
// console.log(Math.PI);

// console.log(Math.abs(-45));   //absolute function
// console.log(Math.round(-45.49999));
// console.log(Math.round(45.49999));
// console.log(Math.ceil(45.2));    //up
// console.log(Math.floor(45.999)); //down

// console.log(Math.min(5,6,1,4,5));
// console.log(Math.max(5, 6, 1, 4, 5));

//Random: -   always give value between 0 and 1 at random.
console.log(Math.random());
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random() * 10) + 1);


//IMP**
const min = 8;
const max = 19;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);