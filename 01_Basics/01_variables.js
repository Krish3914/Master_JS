const accountId = 229929;   //const is used when we want value to be fixed
let accountEmail = "krish01@google.com"
var accountPassword = "Krish123"
accountCity = "Jaipur";       //automatic variable data type but not preferable to write
let accountState;



/*
prefer that not to use var because of its problems related to block scope and functional scope in JS
*/ 

// accountId = 9380;           not allowed because it is constant
accountEmail = "krish@google.com"
accountPassword = "Krish321"
accountCity = "Jp"

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);