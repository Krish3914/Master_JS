//Defining objects using Constructor: Singleton

// const tinderUser1 = new Object();  //Singleton
// console.log(tinderUser1);

const tinderUser = {}     //non Singleton

tinderUser.id = "123";
tinderUser.name = "Krish";
tinderUser.email = "krish@google.com";
tinderUser.age = 21;
tinderUser.isLoggedIn = true;
// console.log(tinderUser);

//Nested Object
const regularUser = {
    email: "krish@hotmail.com",
    fullname: {
        username:{
            firstName: "Krish",
            lastName: "Agrawal",
        },
    },
    age: 21,
}
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.username.lastName);

//Optional chaining: (if property of object does not exist in case): (regularUser.fullname?"if":"else"): this is if_else only:   Very useful in APi calling

//Combining Objects
const obj1 = {1:"a", 2:21};
const obj2 = { 3: "b", 4: 22 };

const obj3 = {obj1, obj2};
// console.log(obj3);      //Same problem as of array, it is not combining 2 objects but it is putting 2nd objects into the first as object

const obj4 = Object.assign(obj1, obj2);
const obj5 = Object.assign({}, obj1, obj2);  //better
// console.log(obj1);
// console.log(obj2);
// console.log(obj4);
// console.log(obj5);

//Spread Operator   :  latest and easy
const obj6 = { 1: "a", 2: 21 };
const obj7 = { 3: "b", 4: 22 };
const objspread = {...obj6,...obj7};
// console.log(obj6);
// console.log(obj7);
// console.log(objspread);



//when data came form database: it is very huge so we implement that in this form
const data = [
  {
    id: "123",
    name: "krish",
    email: "k@gmail.com",
  },
  {
    id: "123",
    name: "krish",
    email: "k@gmai.com",
  },
  {
    id: "123",
    name: "krish",
    email: "k@gma.com",
  },
  {
    id: "123",
    name: "krish",
    email: "k@gm.com",
  },
];
// console.log(data.length);
// console.log(data[2].email);
// console.log(data[0].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(typeof Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));   //key value pair divide

console.log(tinderUser.hasOwnProperty('isLoggedIn'));     //hasOwnProperty gives the boolean result whether it has the mentions=ed property or not.
console.log(tinderUser.hasOwnProperty("isLogged"));