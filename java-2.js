'use strict';

// let number = 1
// while( number <=100 ) {
//     if( number %3 == 0)
//     console.log("fizz")
//     else if( number %3 ===1)
//         console.log(number)
//         number++
// }



// for( let n = 1; n <= 100; n++) {
//     if (n % 5 == 0 && n%3 == 0) {
//         console.log("FizzBuzz")}
//     else if (n % 3 == 0) {
//         console.log("Fizz");}
//     else if (n % 5 == 0) {
//         console.log("Buzz");}
//     else 
//         console.log(n);
//     }




//      for( let d = 1; d <=100; d++) {
//             let answer = d %5 == 0 ? buzz : fizz
//             }
//             console.log(answer);



for( let d = 1; d <=100; d++) {

    console.log(
        `${ d%3 ? '': 'Fizz'}${ d%5 ? '' : 'Buzz'}` || d);
    }