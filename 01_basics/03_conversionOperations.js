let score = "33abc"



// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber =  Number(score);
// console.log(valueInNumber);  // it is return NaN (Not a Number ) means if we convert a string which have the string value then it NaN and type is number
// console.log(typeof(valueInNumber));

//we put input in score and convert them in number then the results
// 33 => 33
// 33abc => NaN
// true => 1 ,false => 0
// null => 0
//undefined => NaN


let isLoggedIn = "111";
let booleanIsLoggedIn = Boolean (isLoggedIn);
// console.log(booleanIsLoggedIn);

//we put input in isLoggedIn and convert them in Boolean then the results
/*
1 or any other number even negative number also => true
0 => false
"" => false
"rahul" => true
*/


let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof(stringNumber));



//*********************************** Operations *************************************************

let value = 33;
let negValue = -(value);

// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);
// console.log(2%2);


let str1 = "Hello";
let str2 = "rahul";

let str3 = str1+str2;
// console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");
// console.log(true);

let num1,num2,num3;

num1=num2=num3=100;
// console.table([num1,num2,num3]);
let incValue  = 100;
++incValue;
incValue++;
// console.log(incValue);


//++++++++++++++++++++++++++++++++ Comparision +++++++++++++++++++++++++++++++++++++++++

// console.log(2>=1);
// console.log(2==1);
// console.log(2<1);
// console.log(2!=1);


// console.log("2">1);
// console.log("02">=1);

// console.log(null<=1);
// console.log(null>1);
// console.log(null==1);

console.log(undefined<=1);
console.log(undefined>1);
console.log(undefined==1);











