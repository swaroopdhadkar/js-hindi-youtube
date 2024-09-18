//const tinderUser = new Object()                   // This is a singleton object
const tinderUser = {}                               // This is a non-singleton object

tinderUser.id = "123abc"                            // String value given in ""
tinderUser.name = "Sammy"
tinderUser.isLoggedin = false;                      // Boolean value given

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {                                     // Object is inside an object
        userFullname: {                             // Object is inside an obect which is inside an object
            firstname: "hitesh",
            lastname: "choudhary"
        }

    }
}

// console.log(regularUser.fullname.userFullname.firstname);
// console.log(regularUser.fullname?.userFullname.firstname);              // Optional chaining

const obj1 = {1: "a", 2: "b" }
const obj2 = {3: "c", 4: "d" }
const obj4 = {5: "e", 6: "f" }

//const obj3 = { obj1, obj2}

//const obj3 = Object.assign({}, obj1 , obj2, obj4)                           // Syntax , where the {} is target and obj1, obj2, obj4 are source
// The assign function is interesting, whatever values are there given within the parenthesis of the assign object will be combined and stored in the first object or the curly brackets if given as the first object/parameter

const obj3 = {...obj1, ...obj2}                                               // Spread Operator           
//console.log(obj3);

const users = [                                         // This is an array
    { 
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
]

users[1].email                                              // First index of the array 'users' is an object so we can use the dot notation after that
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));                       // Object.keys function will provide the keys that are present in the object that is passed as a parameter in between the parenthesis of the keys function
// console.log(Object.values(tinderUser));                     // Provides the values of the object passed as a parameter in the parenthesis of of the values function
//                                                             // Will returen the keys/values inside an Array
// console.log(Object.entries(tinderUser));                    // Gives the key and values in the form of arrays, for example in one array there will be one key and value, in the next array there will be the next key and value

//console.log(tinderUser.hasOwnProperty('isLoggedin'));
//console.log(tinderUser.hasOwnProperty('isLogged'));

 const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
 }

 course.courseInstructor

 const {courseInstructor} = course                              // Syntax, write const and curly braces {} = from where the value is to be extracted, in the curly braces, which value is to be extracted.
 const {courseInstructor : instructor} = course                 // Another way of writing the syntax
                                                                // Destructuring

 console.log(courseInstructor);       
 console.log(instructor);

//  {
//     "name": "hitesh",
//     "courseName": "js in hindi",
//     "price": "free"
//  }
                      
 


