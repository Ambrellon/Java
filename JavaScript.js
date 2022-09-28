'use strict'

// // // let user = {
// // //     name: "John",
// // //     age: 30
// // // };

// // // let {name, years: age, isAdmin = false} = user;

// // // alert( name );
// // // alert(age);
// // // alert(isAdmin);

// // // console.log(user);



// // // Scope
// // //Exercise 1

// // // function test() {
// // //     let q = "Yikes";
// // //     if(q == "Yikes") {
// // //         let x = "WORK";
// // //     }
// // //     console.log(q);
// // //     console.log(x);
// // // }
// // // test();


// // //Exercise 2
// // // function why() {
// // //     console.log(a);
// // //     console.log(foo());
// // //     let a = 1;
// // //     function foo() {
// // //         return 2;
// // //     }
// // // }
// // // why();


// // //Functions Exercises
// // //Exercise 1



// // let welcome = function welcome(name, age, gender){
// //      return console.log (`My name is ${name}, I am ${age} and of gender, ${gender}`);
// // }
// // welcome("George", 20, "Male");


// // //Exercise 3
// // const powerup = (n1, n2) => console.log(n1**n2);

// //     powerup(3,4);


// const greet = (firstname, lastname) => {
//     console.log(firstname, lastname);
//     alert(`Hello ${firstname} ${lastname}`);
// }

// greet("Michael", "Knox")


// let prom = new Promise((resolve, reject)=>{
//     let x = 2 + 5;
//     if(x==8){
//         resolve("Success");
//     }else{
//             reject("Failed");
//     }
// })

//Calling the promise
//try-catch-finally
// prom.then((message)=>{
//     console.log(`Then block - status is: ${message}`);
// }).catch((message)=>{
//     console.log(`Catch block - status is: ${message}`);
//     console.error(message);
// }).then(()=>{
//     console.log("Finally block - runs regardless")
// })


//Closures - used for data privacy

//Outer Function
const fullName = (fname) => {
    let intro = "My name is ";
    //inner function
    const lname = (k) => {
        return `${intro} ${fname} ${k}`;
    }
    return lname;
}

let first = fullName("Michael"); //fname = Michael
console.log(first);//fname returns the lname arrow function and pulls the string

let second = first("Knox")
console.log(second); // actual values that the inner function has used for the string

/////////////

let multiply = (x) => {
    return (y) => {
        return x*y;
};    
}

let multi2 = multiply(2);
console.log(multi2(20));
let multi5 = multiply(5);
console.log(multi5(5));


let person = () => {
    let firstName = "Bob";
    return {
        getName: function () {
            return firstName;
        },
    setName: function (codeName) {
        firstName = codeName;
    },
    };
}

let personA = person;
console.log(personA.getfirstName());
personA.setName("Fred");
console.log(personA.getfirstName());

