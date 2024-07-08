//Nested Scope: (Parent - Child) concept
//inner can access outer variables but Outer can not access Inner variables.: This is scope/Closures.


function one(){
    username = "KrishAg";

    function two(){
        website = "vscode";
        // console.log(website);
        // console.log(username);
    }

    // console.log(website); //can not be accessible
    two();
    return "Executed nested function";
}

console.log(one());

if(true){
    const userName = "krish";
    function concat(){
        const editor = " VScode";
        if(userName === "krish"){
            console.log(userName + editor);
        }
    }
    concat();
    console.log(userName)
    // console.log(editor);  //Outside of scope
}

// console.log(userName);    //can not access userName: because outside the scope of variable.
console.log(username);   //can access outside scope because no data type given, sp it will be taken as (var).



console.log(`++++++++++++++++++++==`);
//===+++++++++++++More to learn++++++++++++====

// How function are working
console.log(addOne(4));

function addOne(num){
    return (num + 1);
}

//Concept of hoisting

// console.log(plusTwo(40));   //can not be executed because function is stored in a variable and function called before declaring.

const plusTwo = function addTwo(num){
    return (num + 2);
}
console.log(plusTwo(40));
