const name = "Krish";
console.log(name);
console.log(typeof(name));
const after = 'Agrawal';
const repoCount = 41;

// console.log(name + after + ": " + repoCount + " Repositories");

//Modern way to print: String interpolation
console.log(`Username: ${name} ${after}: ${repoCount} Repositories`);

//Another way to define string: inbuilt properties
const newString = new String("Krish-A");
console.log(newString);
console.log(typeof(newString));
console.log(newString.__proto__); //no need to write everwhere to access the function inside it
console.log(newString.length);
console.log(newString.toUpperCase());
console.log(newString.charAt(4));
console.log(newString.indexOf('h'));

const slicing = newString.substring(1,3);
console.log(slicing);

const rev_slicing = newString.slice(-5, -3);
console.log(rev_slicing);


//Trim and Replace
const st = "      Krish  Agrawa l      ";
console.log(st);
console.log(st.trim());      //start, end

const url = "https://krish.com/krish%20agrawal";
console.log(url.replace('%20', '_'));
console.log(url.includes('krish'));
console.log(url.includes("nokrish"));
console.log(url.includes("agrawal"));
console.log(url.indexOf("agrawal"));
console.log(url.includes("-"));
console.log(url);

console.log(url.split('/'));