// (function(){
// "use strict";
//
// let numberToSkip = 0;
//
// while (numberToSkip !== undefined){
//     numberToSkip = prompt("Please enter an ODD number between 1 and 50");
//     if (numberToSkip % 2 !== 0 && numberToSkip > 0 && numberToSkip < 50){
//         console.log("Number to skip is: " + numberToSkip);
//         break;
//     }
//     console.log(numberToSkip); //just a visual check when an invalid number is entered that the invalid number is being received
// }
//
// for(let i = 1; i < 50; i++){
//     if(i === parseFloat(numberToSkip)){
//         console.log("Yikes! Skipping number: " + numberToSkip);
//         continue;
//     }
//     if(i % 2 === 0){
//         continue;
//     }
//     console.log("Here is an odd number: " + i);
// }
// })();