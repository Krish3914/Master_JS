// this keyword:
//to refer current context

const user = {
  userName: "krish",
  price: 999,
  welcomeMessage() {
    console.log(`${this.userName}, Welcome to Web Hosting Platform`);
    console.log(this);
    return "Executed";
  },
//   welcome: this.welcomeMessage(),
};

// console.log(user);
console.log(user.welcomeMessage());
user.userName = "Temp"
console.log(user.welcomeMessage());
console.log(this);

// Object.freeze(user);
// user.userName = "pet"; //No change if Object.freeze is executed here.
// console.log(user.welcomeMessage());

function chai(){
    console.log(this);      //mainy dependencies and global structure
}
chai();

function chaicode() {
    let userName = "krish"
  console.log(this.userName); //cannot fetch data because this only works with objects.
}
chaicode();

// const chai1 = function(){
//   let userName = "krish";
//   console.log(this.userName); //cannot fetch data because this only works with objects.
// }
// chai1();

console.log(`+++++++++====`)

//Arrow functions
//Syntax:    () => {}
//We can use (this) keyword function in arrow function also 
const chaiWithCode = () => {
    let userName = "krish"; 
    console.log(this.userName); 
    console.log(this); 
}

chaiWithCode();


//Basic Arrow function  : or also said explicit return (where return is used)
const addTwoNumbers = (num1, num2) => {
    return (num1 + num2);
}
console.log(addTwoNumbers(2, 3));

//Another type of Arrow function: Implicit return (single line statement): (no return, no parenthesis)
const addTwoNumber = (num1, num2) => (num1 + num2);  //no curly braces, no return
console.log(addTwoNumbers(2, 5));


//Implicit return for objects
const userObject = () => ({userName: "Krish"});
console.log(userObject());

