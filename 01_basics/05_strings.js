const name = "Swaroop"
const repoCount = 50

//console.log(name + repoCount + " value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// This is called String Interpolation
// This is a modern way of writing the syntax

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));

// Write an article about how many Strings methods there are, can go through the Strings methods

const newString = gameName.substring(0,4)
console.log(newString);

const anotherStirng = gameName.slice(-7,5)
console.log(anotherStirng);
// Here for the (-)negative values, it starts from the back

const newStringOne = "    Swaroop    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));

console.log(url.includes(('sundar')));

console.log(gameName.split('-'));

















