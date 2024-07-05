//2types of defining objects: 1.Literals, 2.Constructors
//only a difference of Singleton baaki cheeze all same.

//Singleton

/* 
if as Literals: No singleton
        ex:  const User = {}
if as Constructor: Singleton
        ex: Object.create
*/


//Object Literals:  keys and Values concept    //Keys are bydefault taken as string and values we can give as per our preference

const mysym = Symbol("key1");
// console.log(mysym);


const JsUser = {
    name: "Krish",
    "lastName": "Agrawal",       //Now we cannot access it by dot(.)
    [mysym]: "definedinobject",
    age: 18,
    location: "Jaipur",
    email: "krish@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday","Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser[email]);    because we have give it as a string
// console.log(JsUser["email"]);
// console.log(JsUser.lastName);
// console.log(JsUser[lastName]);          //do not work
// console.log(JsUser["lastName"]);

// console.log(JsUser.lastName);

// console.log(JsUser[mysym]);

JsUser.email = "krish01@google.com";
// console.log(JsUser.email);

// Object.freeze(JsUser)   //Lock the Object: We can not change the value now

JsUser.email = "krish@locker.com";
JsUser.age = 82;
// console.log(JsUser);

//Functions
JsUser.greetings = function(){
        console.log("Hi function is called");
}

JsUser.greetingsTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};

console.log(JsUser.greetings);
console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());

