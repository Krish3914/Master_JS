// 2 types => primitive and non-primitive datatypes
/*
1. Primitive datatype : Call by Value data type

    7-types:- String, number, boolean, null, undefined, Symbol(uniqueness), BigInt

2. Non-primitive datatype:Call by reference data type

    types:- Array, objects, Functions
*/

const val = 9
const value = 9.1
const isLoggedIn = true
const temp = null
let idk;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id==anotherId)
// console.log(id===anotherId)
// console.log(id)
// console.log(anotherId)

const bigNumber = 98765432n
// console.log(typeof bigNumber)




//Non-primitive
// Array:
const arr = ["hello", "hi", "hey"]
console.log(arr)

// object
let myobj = {
    name: "krish",
    age: 21
}
console.log(myobj)

//Function
const myfun = function(){
    console.log("Hello World this is function")
}
myfun();

console.table([typeof arr, typeof myobj, typeof myfun]);


// ____________________________________-------------------_________________________________



//Stack and Heap
// Stack is used for Primitive datatype : we get copy of variable
//Heap is used for Non-Primitive datatype:  here variable is passed by reference.

let myyoutube = "newyoutube"

let varia = myyoutube;
varia = "old-youtube"

console.log(myyoutube);
console.log(varia);


let userOne = {
    email:"user@gmail.com",
    add:"hi123"
}
let userTwo = userOne;

// userOne.email = "userchange@gmail.com";

console.log(userOne);
console.log(userTwo);

userOne.email = "userchange@gmail.com";

console.log(userOne);
console.log(userTwo);