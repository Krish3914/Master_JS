const marvelHeroes = ["Thor", "Ironman", "Spiderman"];
const dcHeroes = ["Superman", "Flash", "Batman"];

// console.log(marvelHeroes + " " +dcHeroes);
// console.log(typeof(marvelHeroes + dcHeroes));

marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);

//all in one
const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);

//modern all in one: spread operator
const allCombinedHeroes = [...marvelHeroes, ...dcHeroes];
// console.log(allCombinedHeroes);

//Nested Array
const testArray = [1,2,[3,4,6],7,8,[3,4,[6,5,7]],5];
// console.log(testArray);
//to organise and ccombined to form and all to single arrar
const combined_testArray = testArray.flat(Infinity); //Here infinity given uis depth of array to combined.
const combined_testArray1 = testArray.flat(1);
// console.log(combined_testArray);
// console.log(combined_testArray1);


//Data Scrapping: while fetching of data from somewhere.
console.log(Array.isArray("Krish"));
console.log(Array.isArray(["Krish"]));
console.log(Array.from("krish Agrawal"));

console.log(Array.from({First_Name: "Krish"}));     //returns empty array because key,value pair.

const newA = Array.from({First_Name: "Krish"});
console.log(typeof(newA));


let score1 = 100
let score2 = 250
let score3 = 350;
console.log(Array.of(score1, score2, score3));
