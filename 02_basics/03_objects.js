
// Singleton                                // Yeh apne tarah ka ek hi object he  // When we make an object through constructor , it is singleton

// Object literals
//Object.create                             // This is making the object using the constructer method

const mySym = Symbol("key1")

const JsUser = {
    name:"Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",                      
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])                    // Because email is a string
// console.log(JsUser["full name"]);
// console.log((JsUser[mySym]));                   // Symbol using [] Square brackets

JsUser.email = "hitesh@chatgpt.com"             // Can overwrite something in an object using the dot notation

//console.log(JsUser.email);
// Object.freeze(JsUser)                           // Can freeze the values of the object Jsuser from changing

JsUser.email = "hitesh@microsoft.com"

//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);                // string interpolation, using backticks
     
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo());

//console.log(typeof(JsUser[mySym]));
