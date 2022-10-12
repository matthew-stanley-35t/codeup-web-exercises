"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(userColor){
//     if (userColor.toLowerCase() === "red"){
//         return "Red is the best color for fire trucks.";
//     }
//     else if (userColor.toLowerCase() === "blue"){
//         return "Blue is a great color, especially Chargers powder blue ;)";
//     }
//     else if (userColor.toLowerCase() === "orange"){
//         return "Orange is my wife's favorite color!";
//     }
//     else {
//         return "I don't really know anything about " + userColor + ", sorry.";
//     }
// }
// console.log(analyzeColor("Red"));
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("purple"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

function analyzeColor(userColor){
    switch(userColor.toLowerCase()){
        case "red":
            alert("Red is the best color for a fire truck");
            return "Red is the best color for a fire truck";
        case "blue":
            alert("Blue is a great color. Especially if it's Chargers royal blue.");
            return "Blue is a great color. Especially if it's Chargers royal blue.";
        case "orange":
            alert("Orange is my wife's favorite color!");
            return "Orange is my wife's favorite color!";
        default:
            alert("I dont know much about " + userColor + ", sorry about that.");
            return "I dont know much about " + userColor + ", sorry about that.";
    }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

//analyzeColor(prompt("Please enter a color of your choice:"));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal (discountNumber, startingTotal){
    if (parseFloat(discountNumber) === 5){
        return "Congratulations, you received a 100% off discount! Your total today is: $" + 0;
    }
    else if (parseFloat(discountNumber) === 4){
        return "Congratulations, you received a 50% off discount! Your total today is: $" + startingTotal*.5;
    }
    else if (parseFloat(discountNumber) === 3){
        return "Congratulations, you received a 35% off discount! Your total today is: $" +startingTotal*.65;
    }
    else if (parseFloat(discountNumber) === 2){
        return "Congratulations, you received a 25% off discount! Your total today is: $" +startingTotal*.75;
    }
    else if (parseFloat(discountNumber) === 1){
        return "Congratulations, you received a 10% off discount! Your total today is: $" +startingTotal*.9;
    }
    else if (parseFloat(discountNumber) === 0){
        return "Sorry, you did not receive a discount today.";
    }
    else{
        return "Sorry, that is not a valid discount number";
    }
}

//let userLuckyNumber = prompt("Please enter your lucky discount number:");
//let goodsTotal = prompt("Please enter the total amount of your purchase:");
//alert(calculateTotal(userLuckyNumber, goodsTotal));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
//  var luckyNumber = Math.floor(Math.random() * 6);
// let purchaseTotal = prompt("Please enter your purchase total:");
// alert("Congratulations, your lucky number today was: " + luckyNumber + "! \rYour price before discount was: " + purchaseTotal + "\rWhich means: " + calculateTotal(luckyNumber, purchaseTotal));


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

if (confirm("Would you like to enter a number?")){
    pickANumber(prompt("Please enter a number. It can be positive or negative, but it MUST be a number!"));
}

function pickANumber(userInput){
    let oddEven = numberOddEven(userInput);
    let num100 = numberAdd100(userInput);
    let posNeg = numberPosNeg(userInput);

    if (!isNaN(parseFloat(userInput))){
        return alert(oddEven), alert(num100), alert(posNeg);
    }
    else{
        return alert("You entered a value that is not a number. Please only enter numbers.")
    }
}

function numberOddEven(userNumber){
    if (parseFloat(userNumber) % 2 === 0){
        return "Your number is even!"
    }
    else {
        return "Your number is odd!"
    }
}
function numberAdd100(userNumber){
    return "Your number + 100 = " + (parseFloat(userNumber)+100);
}
function numberPosNeg(userNumber){
    if (parseFloat(userNumber) >= 0){
        return "Your number is Positive!";
    }
    else {
        return "Your number is negative";
    }
}