//Functions are used when we want the task to be done repeated times, just by calling the functions

//Nothing will execute in the function once the return statement executed by the function

function MyName(){
    console.log("K");
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
}

// MyName //Only reference to function
// MyName()  //Calling of function

function addTwoNumbers(a,b){
    let ans = a + b;
    return ans;
}

const a = 3;
const b = 7;
// console.log(addTwoNumbers(a,b));
// console.log(addTwoNumbers(2,18));
// console.log(addTwoNumbers(2,"4"));
// console.log(addTwoNumbers(2,"a"));
// console.log(addTwoNumbers(2, null));

// Parameters V/S Arguments
/*
Parameters:  the parameters we are passing during execution of the function
            function addTwoNumbers(a,b){}, here a,b are parameters
Arguments:  the Arguments we are passing in brackets during function call
            addTwoNumbers(a,b); , here a,b are Arguments.

*/

const result = addTwoNumbers(3, 18);
// console.log(`Result: ${result}`);\


function loggedInUser(userName){
    //using if else check userName entered or not
    // if(userName === undefined){
    //     console.log("Enter userName in argumment please!!");
    //     return 
    // }
    if (!userName) {
      console.log("Enter userName in argumment please!!");
      return;
    }
    return `${userName} logged in Successfully`;
}
// console.log(loggedInUser("Krish"));
// console.log(loggedInUser());    //userName is undefined


//Shopping Cart:  Where argument are not fixed.
function calculateCartPrice(total){
    return total;
}

console.log(calculateCartPrice(200));
console.log(calculateCartPrice(200, 300, 350, 150, 2500));

//Here comes Rest & Spread operator depending on their usercases
function calculateCartPriceTwo(...total) {    //Rest operator
  return total;
}
console.log(calculateCartPriceTwo(200, 300, 350, 150, 2500));

function calculateCartPriceTwoo(val, ...total) {
  //Rest operator
  return total;
}
console.log(calculateCartPriceTwoo(200, 300, 350, 150, 2500));

//object fetch from function
const user = {
  name: "Krish",
  price: 201,
}

function handleUser(anyUser){
  console.log(`UserName is ${anyUser.name} and Price is ${anyUser.price}`);
}

handleUser(user);

//Array fetch to function
const userArray = [1,2,3,4,5];
function handleUserArray(anyUserArray){
  console.log(`Array is ${anyUserArray.length}`);
}
// handleUserArray(userArray);
handleUserArray([2,2,5,6]);