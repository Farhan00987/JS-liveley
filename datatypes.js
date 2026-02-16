let val1 = null;    
let val2 ;
let val3 = 0;

console.log(typeof(val1))
console.log(typeof(val2))
console.log(typeof(val3))

// Null is an object data type because it is empty and you cannot assign anything to it 
// unidentifed is variable in a value to variable is not asssinged

const userprofile ={ Name : 'Farhan', age : 21};
console.log(userprofile.Name = "Me")

userprofile = {Name : 'Rahul', age : 22};
console.log(userprofile)

// Here const variable has locked the reference but we can change the internal values which in first code were able to su
// sucessfully run it but when we changed the valuse of entire object it gave assignment error. 

const id1 = Symbol('123');
const id2 = Symbol('123');

console.log(id1 === id2);

// Values are same but still it will show different because of symbol type it is know for it uniqueness 

"use Strict"

