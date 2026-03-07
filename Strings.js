// Problem 1: The Index Explorer
// Task: Create a string object const game = new String('Farhan-FC'). Print the character at index 3 and the total length.
// Concept: Accessing string properties like an object.

const game = new String('Farhan-Fc')
console.log(game.charAt(3))
console.log(game.length)

// o/p it gave us is h and 9 

// Problem 2: The Negative Slicer
// Task: Given const str = "Chai-Aur-Code", use the .slice() method with negative numbers to extract only the word "Code".
// Concept: Understanding how slice counts backward from the end.

const str = "Chai-Aur-Code"
console.log(str.slice(-4))


// Problem 3: The URL Cleaner
// Task: You receive a messy URL: const url = "https://farhan.com/farhan%20qureshi". Replace %20 with a - and check if the URL includes the word "farhan".
// Concept: Cleaning data for real-world apps.

const url = "https://farhan.com/farhan%20qureshi"
console.log(url.replace("20%",'-'))
console.log(url.includes("Farhan"))

// Problem 4: The Space Killer
// Task: A user enters their name as "   Farhan   ". Use a method to remove the spaces and print the result.
// Concept: Using trim() to sanitize user input.

let name = "   Farhan     "
console.log(name.trim())

// Problem 5: The Master Splitter
// Task: Take the string "apple-banana-orange-mango". Convert this single string into an Array of 4 separate fruits.
// Concept: Using split() to change data structures.

let fruits = "apple-banana-organe-mango"
console.log(fruits.split())

// Problem 6: The Immutability Test
// Task: ```javascript
// let name = "farhan";
// name.toUpperCase();
// console.log(name);

let Name = "farhan"
Name.toUpperCase()
console.log(Name)

// o/p doesnt change becasue string is immutable.

