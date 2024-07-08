//IIFE: Immediately Invoked Function Expressions (IIFE).

//jaise hi function likha => turant hi execute karana hain


//iife is used because ther eare some cases where global pollution problem occurs
//global pollution: situation in which the global declared variables for a loop affect inside the loop.

function chai(){
    console.log(`DB Connected`);
}
chai();

//Another form
(function chai() { //named iife because function is given as name
  console.log(`DB Connected`);
})(); //here semicolon is very necessary to end the context of iife before starting of new iife, otherwise next process will not work.

console.log("hello");

// Syntax:- ()()
//Here in this 1st () is for function definition
//another 2nd () is for function call.

//arrow function can also be used in iife
( () => {   //(simple/unnamed) iife b/c function is not given as any name
    console.log('DB connect inside Arrow function');
})();

((name) => {
  console.log(`DB connect inside Arrow function for ${name}`);
})("krishAg");

//remember to use semocolon(;) when greater than one IIFE are in use to end the context of IIFE

