"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

//var favoriteColor = prompt("Please enter your favorite color:");
//alert("Great! " + favoriteColor + " is my favorite color too!");

//Prompt the user to select a function
let whichFunction = prompt("Which function would you like to run? \n 1)Movie Rental 2)Pay calculator 3)Class Scheduler 4)Product offer");
let conflict;

//check to see if the user has made a selection, if they have call the master function that calls the function the user picked
if(whichFunction != undefined){
    functionActivator();
}

function functionActivator(){
    if(whichFunction === "1"){
        movieRental();
    }
    else if(whichFunction === "2"){
        payCalculator();
    }
    else if(whichFunction === "3"){
        classScheduler();
    }
    else if(whichFunction === "4"){
        productOffer();
    }
    else{
        alert("This is not a valid selection. Please reload and select 1 - 4.")
    }
}

//prompt the user to input the number of days they've had each rental then calculate current amount owed
function movieRental() {
    alert("You rented some movies! How much do you owe so far?");

    let movieOne = prompt("How many days ago did you rent 'The Little Mermaid'?");
    let movieTwo = prompt("How many days ago did you rent 'Brother Bear'?");
    let movieThree = prompt("How many days ago did you rent 'Hercules'?");
    let totalRentalTime = Number(movieOne) + Number(movieTwo) + Number(movieThree);

    alert("You have " + totalRentalTime + " days worth of movie rentals. Your current amount due is: $" + totalRentalTime * 3)

}

//prompt the user to input how many hours they worked for each company then calculate the total made based on known pay rates.
function payCalculator(){
    alert("Weekly Pay Calculator! \n Let's figure out how much you made this week!");

    let googlePay = 400;
    let amazonPay = 380;
    let facebookPay = 350;

    let googleHours = prompt("How many hours did you work for google this week?");
    let amazonHours = prompt("How many hours did you work for amazon this week?");
    let facebookHours = prompt("How many hours did you work for facebook this week?");

    let totalPay = (Number(googleHours)*googlePay) + (Number(amazonHours)*amazonPay) + (Number(facebookHours)*facebookPay);

    alert("You worked hard this week! Congrats you made $" + totalPay + " (before taxes, womp womp)")
    let breakdown = prompt("Would you like to see a breakdown of how much you made from each job? y/n")

    if (breakdown === "y"){
        alert("You worked " + googleHours + " hours for google and made $" + googleHours*googlePay + "\n You worked " + amazonHours + " hours for amazon and made $" + amazonHours*amazonPay + "\n You worked " + facebookHours + " hours for facebook and made $" + facebookHours*facebookPay);
    }
    if (breakdown === "n"){
        alert("Thanks for using the Weekly Pay Calculator")
    }
    if (breakdown != "y" || "no"){
        alert("Please reload and make a valid selection of y or n")
    }
}

//Prompt the user to pick a class to enroll in. Max class size and current student schedule are "known" make checks to make sure the class isn't full AND doesn't conflict with current schedule.
function classScheduler(){
    alert("Welcome to the class scheduler");
    let classSelection = prompt("Which Class do you want to enroll in? 1)Math 2)Computers 3)Creative writing");

    let classMaxSeats = 20;
    const currentSchedule = ["mon", "wed", "fri"];
    let mathDay = "mon";
    let computersDay = "tues";
    let writingDay = "thurs";
    let mathSeats = 12;
    let computerSeats = 10;
    let writingSeats = 20;
    let daySeats;

    if(classSelection != undefined){
        selectionFiller();
    }

    function scheduleConflict(){

       if((daySeats.some(item => currentSchedule.includes(item))) == true){
           conflict = true;
       }
       else if ((daySeats.some(item => currentSchedule.includes(item))) == false){
           conflict = false;
        }
    }

    function selectionFiller(){
        if(classSelection == 1){
            daySeats = [mathDay, mathSeats];
            scheduleConflict();
            classChecker();
        }
        if(classSelection == 2){
            daySeats = [computersDay, computerSeats];
            scheduleConflict();
            classChecker();
        }
        if(classSelection == 3){
            daySeats = [writingDay, writingSeats];
            scheduleConflict();
            classChecker();
        }
    }

    function classChecker(){
        if (conflict == true){
            alert("You already have class on the same day as this class. Please try again with another class");
        }
        else if(daySeats.some((element) => element >= classMaxSeats) == true){
            alert("Sorry this class is already filled. Please try again with another class selection");
        }
        else{
            alert("Congrats, class successfully added!");
        }
    }
}

//Prompt the user to identify if they are a premium user, how many items purchased, and the month and day their offer code expires. Validate all items or reject coupon.
function productOffer(){
    alert("Congratulations on receiving your offer code. Please answer the following questions to check if the offer applies.");

    let premiumUser = prompt("Are you a premium user? y/n");
    let numberOfItems = prompt("How many items did you purchase?");
    let offerExpireMonth = prompt("What month does your offer expire? Please use format: 2 digit month. Example Nov = 11");
    let offerExpireYear = prompt("What year does your offer expire? Please use format: 4 digit year. Example 2022");
    let currentYear;
    let currentMonth;

    function getDateInfo(){
        let date = new Date();
        currentYear = date.getFullYear();
        currentMonth = date.getUTCMonth() + 1;
    }

    if (premiumUser != undefined && numberOfItems != undefined && offerExpireMonth != undefined && offerExpireYear != undefined){
        getDateInfo();
        offerChecker();
    }

    function offerChecker(){
        if (numberOfItems <= 2 && premiumUser === "n"){
            alert("Sorry you must purchase more than 2 items or become a premium user to use this offer")
        }
        else if ((Number(offerExpireMonth) < Number(currentMonth) && Number(offerExpireYear) <= Number(currentYear)) || Number(offerExpireYear) < Number(currentYear)){
            alert("Sorry this coupon is expired")
        }
        else{
            alert("Congratulations, this offer is valid for your purchase!")
        }
    }
}