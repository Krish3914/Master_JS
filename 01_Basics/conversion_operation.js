let score = "33abc";
// console.log(typeof score)

let valueInNumber = Number(score);
// console.log(typeof (valueInNumber))
// console.log(valueInNumber);


/* Conversion
"33"  ->  33
"33abc" -> NaN (Not a number)
null -> 0
undefined -> NaN
true -> 1
false -> 0
*/


let isLoggedIn = undefined;

let boolIsLoggedIn = Boolean(isLoggedIn);
// console.log(boolIsLoggedIn)

/* Conversion
1 -> true
0 ->false
""-> false
"nvfudnc"," " ->true
*/


let num = 929

let stringConvert = String(num)
console.log(stringConvert)
console.log(typeof stringConvert)