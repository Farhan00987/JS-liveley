//Problem 1: The Name Swap (Stack)
//Concept: Primitives are independent after assignment.

let Mycity = "Mumbia"
let Otherciyt = Mycity
Otherciyt = "Pune"

console.log(Mycity)

// op : answer is still mumbia even though we assinged a differnet value to the vairable still it is a copy orignal will never change becasue it stack memory

//Problem 2: The Social Media Profile (Heap)
//Concept: Objects share the same memory location.

let Userone = {
    Name : "Farhan", 
    followers : 210, 

}

let usertwo = Userone;
usertwo.followers = 310;
console.log(Userone.followers);

// o/p : is 310 because this is a heap memory type if you re assing the value of or change it will change everything becasue it directly pont the address of data type 

// Problem 3: The Array Mutation (Heap)
//Concept: Arrays are objects, so they live in the Heap.

let fruit = [ "Apple", "Ornage"]
let newFruit = fruit
newFruit.push("Mango")

console.log(fruit.length);
console.log(fruit);

// o/p Mango was appended in the array becasue array is heap you can change the value after the declaration 

//Problem 4: The String Method Mystery (Stack)
//Concept: Primitive values are "immutable" (cannot be changed). Methods return a new value.

let gameName = "spiderman"
gameName.toUpperCase()

console.log(gameName);

// O/p : it stayed as it is didnt changed because it is a stack memory and we didnt use any other variable to copy the reference we tired to change it with in same varible 

//Problem 5: Comparison of Objects (Reference Check)
//Concept: Comparing objects compares their addresses, not their content.

let obj1 = {val1 : 10};
let obj2 = {val2 : 10};
console.log(obj1 == obj2);
console.log(obj1 === obj2);

// op/ shows false this i dint get it because object is non primitive heap type values are also same then why false 


let hero = { name : "Ironman"};
let flyingHero = hero;
let hero = { name : "Batman"} 

console.log (flyingHero.name)

// didnt know but it was throwing an error becasue idientife has already declared and also it earler giving error block scope varialbe already declared