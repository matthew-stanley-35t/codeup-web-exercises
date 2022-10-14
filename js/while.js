"use strict";


// let i = 2
// while (i < 70000){
//     console.log(i)
//     i = i*2;
// }

let conesOnHand = Math.floor(Math.random() * 50) + 50;
console.log("Okay, I have " + conesOnHand + " cones left. Let's sell these so I can go home!");

do {
    let conesThisSale = Math.floor(Math.random() * 5) + 1;
    if (conesThisSale > conesOnHand){
        console.log("Cannot sell you " + conesThisSale + " I only have " + conesOnHand + "...");
    } else if (conesOnHand === 0){
        console.log("Yay! I sold them all!")
    } else {
        console.log(conesThisSale + " cones sold...   There are " + conesOnHand + " cones left");
        conesOnHand = conesOnHand - conesThisSale;
    }
} while (conesOnHand > 0);