// 1) mystery of symbol 
const id = Symbol("123")
const mydi = Symbol("123")

console.log(id === mydi)
// O/p is false because symbol is know for is uniqueness if two people have smae name but there ADhar card no is still unique and different

// 2) Big int concept : 

let n = 3456789012345678901234567890
console.log(typeof n)
// O/p : If we put n at the end of the this no the type that variable shows it bigint and when we remove it shows number because any number form 2 * 53 -1 is number if it exceed that no then its big int 


//3 ) Stack copy : 
let Mypetname = "Faresh"
let Myanothername = Mypetname
Myanothername = "Farhan"

console.log(Myanothername);
console.log(Mypetname);
// o/p still remains same assinging a diffenct value to variable after declarition does'not change its value. 

//4 ) Heap copy 

let Userone = {email : "farhan@gmail.com", upi : "fahan@okaxixs"};
let userTwo = Userone
userTwo.email = "f@gmail.com"

console.log(Userone.email);

// O/p changed as it is a heap copy the value itself changes with not just by refernece also by address 


// 5 ) Problem 5: The "Function Variable" (Non-Primitive Concept) 

let myfunction = function(){
    console.log("Hello world ")
}

console.log(typeof myfunction);

// op/ show the type function because it is treated as function varible 