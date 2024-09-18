const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batmans"]

//marvel_heros.push(dc_heros)                              // This will add the another array in the existing array

//console.log(marvel_heros);

// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);                        // In this way, we can get an element inside an another element which is array

const allheros = marvel_heros.concat(dc_heros)             // Gives a new array with combined elements of the original and the new concatinated array 

//console.log(allheros);

const all_new_heros = [...marvel_heros, ...dc_heros]       // Spread operator

console.log(all_new_heros);

const another_array = [1, 2, 3, 4, 5, 6, [7, 8], 7, [6, 7, [4, 5]]]

const reel_another_array = another_array.flat(Infinity)             // If an array has another array inside it and also if it has many layers of arrays inside it, the using flat will bring the elements into one single array

console.log(reel_another_array);                            

console.log(Array.isArray("Hitesh"))                        // Checks if the given parameter is an array

console.log(Array.from("Hitesh"))                           // Consverts whatever value you give into an array

console.log(Array.from({name: "Hitesh"}));                  // interesting

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3));              // Creates a new array of the elements of the given number of parameters











