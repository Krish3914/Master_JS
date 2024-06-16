let value = 9;
let negValue = -value
// console.log(negValue)


// console.log(2+3)
// console.log(2-3)
// console.log(2*3)
// console.log(2 / 3);
// console.log(2 % 3);
// console.log(2 ** 3);  //Power


let str1 = "Hello"
let sap = " "
let str2 = "Krish"
let res = str1 + sap + str2
// console.log(res)


//Complex
// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 3)
// console.log(1 + 2 + "4")

// console.log(true)
// console.log(+true)
// console.log(+"")
// console.log(++true)      //not valid
// console.log(true++)       //not valid


let num1, num2, num3
num1 = num2 = num3 = 98     //not readability of code

let gameCounter = 100;
let n1 = gameCounter++      //post-increment
console.log('n1: ${n1}, gameCounter: ${gameCounter}'); //not working
console.log('n1: ', n1, 'gameCounter: ', gameCounter)
let n2 = ++gameCounter      //pre-increment
console.log("n1: ", n1, "gameCounter: ", gameCounter);


console.log(n1, n2, gameCounter)
console.table([n1, n2, gameCounter])

