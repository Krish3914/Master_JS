//JavaScript Execution Context and Call-Stack

// JavaScript is single Threaded

// JS Execution Context (EC)
// JS Engine creates an Execution Context for every JS code that it runs.
//how JS engine runs/execute the js file: In 2 phases.

// {}: Global Execution Context(EC): this
// this for browser is window Object
//baaki node,dino wagerah sab ke liye alg alag hota hain

//MAinly two type of EC: 1. Global EC
// 2. Function/Functional EC
//3. Eval EC (but it is basically comes under Global EC only).

//How JS code works in phases
// 1. (Creation Phase)/(Memory creation phase): JS Engine creates an Execution Context for every JS code that it runs (also allocated memory and all to variables declared with their values)
// 2. Execution Phase: JS Engine executes the JS code line by line in the Execution Context (perform operations and lines executed in the function like (+,-,... any))

//Code-File
let val1 = 10;
let val2 = 25;
function addTwoNumbers(num1, num2){
    let total = num1 + num2;
    return total;
}

let result1 = addTwoNumber(val1, val2);
let result2 = addTwoNumber(2,3);

//Execution of this code Snippet step-by-step