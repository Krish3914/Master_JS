//Araays definition and intro.

// const newarray = [1,2,3,6,true, "krish",'a'];
const newarray = [1, 2, 3, 6];
// console.log(newarray["one"]);          //undefined: invalid syntax

// console.log(newarray);
// console.log(newarray[1]);


//copy operation in array: 2 types
/*
1. Shallow copy: by reference (changed in the original array) share same reference point
2. Deep  copy: donot share same reference, (make different copy) and changes do not make changes in the original array.
*/

// console.log(typeof(newarray));

//in closole.log browser, there are many prototypes related to array

const myHeroes = ["Sundar", "Jacky", "Nelson"];

const myArr = new Array(1,2,44,5);
// console.log(myArr);

//Array-Methods
myArr.push(3);
myArr.push(33);   //push element at last of array
myArr.pop();       //remove element from last of the array

myArr.unshift(4);  //insert at  start of the array
myArr.shift();      //remove element from start of the array
myArr.shift();

// console.log(myArr.includes(8));       //give ans in boolean that element exist in array or not
// console.log(myArr.includes(44));
// console.log(myArr.indexOf(8));        //give index at which element is present, if not return -1;
// console.log(myArr.indexOf(44));

const newmyArr = myArr.join();      //array into string 
// console.log(newmyArr);
// console.log(typeof(newmyArr));
// console.log(myArr);
// console.log(typeof myArr);


//Slice and Splice
console.log("A: ", myArr);

const slicemyArr = myArr.slice(1,3);      
//in Slice start index is included but end index is not included and original array is unaffected
console.log(slicemyArr);
console.log("After slice: ", myArr);

const splicemyArr = myArr.splice(1, 3);  
//in Splice, start and end index both are included and apliceelements are removed from the original array.
console.log(splicemyArr);
console.log("After splice: ", myArr);

