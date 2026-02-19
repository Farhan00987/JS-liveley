let result = "10" + 20 + 30;
let result2 = 10 + 20 + "30";
let result3 = "100" - 50;

console.log(result)  
console.log(result2) 
console.log(result3)
// so the thing it uses glue mode when there is + and then there is a string but it act differnet with other operator . 

// 2) Unary operator - forces a non number to convert into a number : 

let score = "500";
let isAvialble = true 

console.log(+score + 100)
console.log(+isAvialble)
console.log(+"")
// Js parse a string form Left to right and when we encounter a + at beginning then it forces a non number to be converted into a number . 

//3) Null comparision 

let val = null

console.log(val > 0)
console.log(val >= 0)
console.log(val < 0 )
console.log(val<= 0)
// This can be considered as an exception in JS null is always greater that 0 but it is also considered as equal to 0

//4) understand when switch is off and on 

let email = '';
let username = "0";

if(Boolean(email)){
    console.log("Email exists")

}else{
    console.log("Email doesnt exist")
}
if(Boolean(username)){
    console.log("username Exist")

}else{
    console.log("username does not exist")
}
// Emails does not exist and username does exist 

// 5 ) stricst vs abstract conversion 

let a = 1 
let b = "1"
console.log(a == b)
console.log(a === b)

// True false 

//Problem 1: Glue vs. Math Logic"102030": Because a string "10" came first, the engine stayed in Glue Mode for the whole line."3030": It started with numbers, so it did math ($10+20=30$). Then it saw the string "30" and switched to Glue Mode.50: The minus sign (-) only does math. It forced "100" to become $100$ and subtracted $50$.
//Problem 2: The Unary Force600: +score forced the string "500" to the number $500$. Then it added $100$.1: +true forced the boolean to its numeric equivalent, which is $1$.0: +"" forced an empty string to its numeric equivalent, which is $0$.
//problem 3 : false: Comparisons ($>, <$) convert null to $0$. $0 > 0$ is false.false: The equality operator (==) is picky; it does not convert null to $0$. It only equals itself or undefined.
// Email is empty": An empty string "" is on the Falsy List."Username exists": The string "0" is NOT empty (it contains a character). Only a literal number 0 is falsy. Anything inside quotes that isn't empty is true

let Basespeed = 10;
let power = "5";
let isSuper = true 

let displaySpeed = Basespeed + power + (+isSuper)
console.log(displaySpeed)


let rank = 1 
let currentRank = ++rank 
let afterRank = rank++

console.log(currentRank )
console.log(afterRank)

let Dscore = " 90"
let DscoreIn = Number(Dscore)

if (DscoreIn >= 90){
    if(DscoreIn === 90){
        console.log( "Score is valid and exactly 90 100%")
    }else{
        console.log("score is greater that 100")
    }
}else{
    console.log("Score is not valid")
}

