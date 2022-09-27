'use strict';

console.log("Hello World");

const text = "this is a message";

console.log(text);

console.info(text);

console.dir(text);



console.warn(text)

console.error(text)

console.log("%c" + text, "color: black; background-color: white; font-size: 20px; padding: 5px;");

console.log("%c" + text + "%c" + text, "color:red;", "color:yellow;");

console.log("Hello World")
let str1 = "Welcome to JavaScript";
console.log(str1);
console.info(str1);
console.warn(str1);
console.error(str1);


let car = "Audi A5";
let myObj = {str: "Just keep logging, you are nearly there", id:48576}
console.log("My first car was an ", car, ". The object is: ",myObj);


console.log("Michael");
console.info("Knox");
console.warn("Alnwick");
console.error("Leo");

let make = "Aston Martin"
let model = "DB11"
console.log("My favourite car is "+ make +" and the model is " + model);
console.log(`my favourite car is ${make} and the model is ${model}`);


const exercisetext3 = "Exercise 3"
console.log("exercisetext3")
console.log("%c" + exercisetext3, "color: orange; font-family: fantasy; font-style: Bold; background-color: black; padding: 10px;");


let isMutable = 10;

const isImmutable = 12;

var isInsecure = "don't use me";

//two TYPES of types - primatives and objects

let aBoolean = true;
let aNumber = 4;
let aString = "some text";
let aBigInt = 9999999999999999n;
let aSymbol = Symbol("description in here"); //always unique
let aNull = null; //Usually when dealing with lists or arrays
let anUndefined; //Declare a variable, but don't give any data

let myObject = {
    key : "value",
    anotherkey : 12345
};

console.log(myObject);

console.log(myObject.anotherkey);

//String concatenation
let string1 = "13 * 12 = ";
let result = 13* 12;
console.log(string1+result);

//String interpolation
let string2 = `13 * 12 = ${13*12}`;
console.log(string2);

let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay = totalMoney - moneyPaidSoFar;

console.log(`the total bill is £${totalMoney} the remaining amount of money to be paid is  £${totalLeftToPay}`);


//ASI - Automatic sem-colon insertion
// JavaScript automatically inserts semi-colons for us

let a = 1;
let b = 1;

a
++
b
console.log(`a = ${a}\nb = ${b}`);
// This states a as 1 and b as 2, as it is inserting 2 b's

//Iteration or Loops
//FOR
//Uses a counter
//runs while a condition is met
for(let i = 0; i < 10; i++) {
    console.log(`i = ${i}`);
}

//While
//Works with booleans
//runs until a condition is no longer true
let condition = true;
let increment = 0;

while(condition === true) {
    console.log(`increment = ${increment}`);
    increment++;

    if(increment === 3) {
        condition = false;
    }
}

//DO-WHILE
//Like a while loop, but will always run at least once

let z = false;
do {
    console.log("run forest run");
} while(z === true);

//SWITCH CASES
//These run until a break or a return
// can be much more effective than large IF-ELSE IF statements
let num = 1;

switch(num) {
    case 0:
        console.log("number is zero")
        break
    case 1:
        console.log("we are number one");
    case 4:
        console.log("We're at 4");
    case 10:
        console.log("we're at 10");
        break;
    default:
    console.warn("not here");
}




//WHILE
let i = 2
while(i<=6) {
    console.log(i+1);
    i = i + 2;
}

//FOR
for( let i = 2; i <= 6; i = i + 2) {
    console.log(i+1);
}


//QA Exercises
//1
let A = "100"
while(A <= 200) {
    A++;
    console.log(`a = ${A}`);          
}

//2
let w = 100;
while (w <= 200) {
    if (w % 2 == 0) {
        console.log("-");
    } else {
        console.log("*");
    }
    w++
}



//3
for( let x = 0; x < 10; x++){
    for( let y = 1; y <=10; y++) {
    console.log(y);
    }
}

//4
for( let d = 100; d <= 200; d++) {
    if (d % 2 == 0) {
        console.log("-");
    } else {
        console.log("*");
    }
}



//Conditionals
//Truthy and falsey
//Things that are falsey

let p = false;
p = 0;
p = "";

//unresolved
//undefined
//null
//NaN - not a number

console.log(0 == "");

//IF, ELSE IF and ELSE statements
//check a condition
//run a code block if the condition is met

let q = 5;

if (q == 0) {
    console.log("sunshine");
} else if (q != 2) {
    console.log("moonlight");
}else {
    console.log("boogie");
}

//Ternary IF
//Shorthand version of the if/else

//Truthy/Falsey Exdercises
//3

let r = 16
if (r >= 18 && r <= 65 ) {
    console.log("Correct");
}
    else if (r < 18) {
        console.warn("Underage");
    }
    else {
        console.log("Incorrect");
    }


//4
r >> 50 ? console.warn("Over 50") : console.log("Under 50");
//OR
let answer = r > 50 ? "Over 50" : "Under 50";
console.log(answer);