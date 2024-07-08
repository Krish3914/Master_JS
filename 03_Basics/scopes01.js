let a = 10
const b = 20
var c = 30;

console.log(a,b,c);

if(true){
    let d = 10;
    const e = 20;
    var f = 30;
}

// console.log(d);
// console.log(e);
console.log(f);  //it gives result even if f is declared inside the loop due to var, that's why generally donot prefer to use var.

//Problem
var variable = 200;
if(true){
    var variable = 330;
}
console.log(variable); // 30 got printed which should not be there because variable = 330 should have only scope inside if loop only.

let aa = 20;
if(true){
    let aa = 90;
    console.log(`Inner: ${aa}`);
}
console.log(`Outer: ${aa}`);
