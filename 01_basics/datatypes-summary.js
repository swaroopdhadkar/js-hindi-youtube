// Primitive

// 7 types : String, Number, Boolean, Null , Undefined, Symbol, Bigint


const score = 100
const scoreValue = 100.3
let str1 = "Swaroop"

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

//console.log(id == anotherId);

const BigNumber = 54752394213743224n



// Reference (Non Primitive)

// Arrays, Objects , Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Swaroop",
    age: 22,
}

const myFunction = function(){

    console.log("Hello World");
}


// console.log(typeof outsideTemp);

// console.log(typeof heros);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// Stack(Primitive), Heap(Non-Primitive)

let myYoutubeName = "hitheshchoudharydotcom"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

//console.log(anotherName);

// console.log(myYoutubeName);
// console.log(anotherName);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

//console.log(userOne.email);

let userTwo = userOne
userTwo.email = "swaroop@google.com"

// console.log(userOne.email);
// console.log(userTwo.email);

console.log(typeof id);



// What does typeof give for the primitive datatypes

// Number    => Number
// String    => String
// BigInt    => BigInt
// Boolean   => Boolean
// Null      => Object
// Undefined => Undefined
// Symbol    => Symbol






