// array

const myArr = [0, 1, 2, 3, 4, 5]        // Way to declare an array

const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)    // Another way to declare an array 
//console.log(myArr2[0]);


//console.log(myArr[1]);

// Array methods

// myArr.push(6)       
// myArr.push(7)
// myArr.pop()          

//myArr.unshift(9)              // Unshift adds values in the array at the start of the array
//myArr.shift()                 // Shift removes the value at the start of the array

//console.log(myArr);

// console.log(myArr.includes(9));              // Gives result in the form of a boolean datatype True/false
// console.log(myArr.indexOf(3));               // If the value comes in the form of -1 , then the value is not present in the    array, otherwise gives the index number where the value is been stored in the array

const newArr = myArr.join()                     // It will give a string with all the array elements joined, separated by a comma or by any other separator if that is given by the user

// console.log(myArr);
// console.log(newArr);

// console.log(typeof newArr);

// Slice , Splice

console.log("A " , myArr);                      // When printing an array, it gives the name mentioned to the array, A in this case

const myn1 = myArr.slice(1,3)                   // Gives a portion of the array
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3)        // Difference between slice and splice
console.log("C", myArr);              // Splice changes the original array          
console.log(myn2);












