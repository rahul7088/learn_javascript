// there are two type os DataTypes
// Primitive
// 7 Types of primitive dataTypes is present :- string, number, null, boolean, symbol, undefined bigInt

let stringValue = "rahul";
let numValue = 33;
let isLoggedIn = true;
let temperture = null;
let saleLaptop ;

let id = Symbol('123');
let preferedId = Symbol('123')
console.log(id===preferedId);
let bigIntValue =  152465465646554645645465465465456454656546n;

console.log(typeof bigIntValue)


//Refrence (Non primitive dataType)
// Array, Object, Function

let programminLang  = ["JavaScript", "JAVA", "Pythpon", "C", "C++"]
let priceOfLanguage = {
    "JAVA":10000,
    "JAVA Script":10222,
    "Python": 15000,
}

const myFunction = function(){
    console.log("My first function in programming");
}

console.log(typeof isLoggedIn)