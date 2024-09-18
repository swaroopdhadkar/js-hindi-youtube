const mySym = Symbol("Key1")

const Jsuser = {
    name: "Hitesh",                                     // Behind the scenes, the name is taken as a string.
    "full name" : " Hitesh Choudhary",
    [mySym] : "myKey1",                                 // Syntax where mySym is used as a symbol
    age : 18,
    email : "hitesh@google.com",
    isLoggedin : false,
    lastLoginDays : ["Mondays", "Saturday"]
}

console.log(Jsuser.email);                              // Two different ways to access element from an object
console.log(Jsuser["email"]);
//console.log(Jsuser["full name"]);

console.log(Jsuser[mySym]);

// Access values of an object using .dot notation and using square brackets[]

Jsuser.email = "hitesh@chatgpt.com"
// Can change/override values of an object using an equal notation

console.log(Jsuser.email);
console.log(Jsuser);



