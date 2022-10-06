"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

//var favoriteColor = prompt("Please enter your favorite color:");
//alert("Great! " + favoriteColor + " is my favorite color too!");

var whichFunction = prompt("Which function would you like to run? 1)Movie Rental 2)Pay calculator 3)Class Scheduler 4)Product offer")
var conflict;

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
        alert("This is not a valid selection. Please reload and try again.")
    }
}

function movieRental() {
    alert("You rented some movies! How much is it costing?");

    var movieOne = prompt("How many days ago did you rent 'The Little Mermaid'?");
    var movieTwo = prompt("How many days ago did you rent 'Brother Bear'?");
    var movieThree = prompt("How many days ago did you rent 'Hercules'?");
    var totalRentalTime = Number(movieOne) + Number(movieTwo) + Number(movieThree);

    alert("You have " + totalRentalTime + " days worth of movie rentals. Your current amount due is: $" + totalRentalTime * 3)

}



function payCalculator(){
    alert("Let's figure out how much you made this week!");

    var googlePay = 400;
    var amazonPay = 380;
    var facebookPay = 350;

    var googleHours = prompt("How many hours did you work for google this week?");
    var amazonHours = prompt("How many hours did you work for amazon this week?");
    var facebookHours = prompt("How many hours did you work for facebook this week?");

    var totalPay = (Number(googleHours)*googlePay) + (Number(amazonHours)*amazonPay) + (Number(facebookHours)*facebookPay);

    alert("You worked hard this week! Congrats you made $" + totalPay + " (before taxes, womp womp)")
}

function classScheduler(){
    alert("Welcome to the class scheduler");
    var classSelection = prompt("Which Class do you want to enroll in? 1)Math 2)Computers 3)Creative writing");

    var classMaxSeats = 20;
    const currentSchedule = ["mon", "wed", "fri"];
    var mathDay = "mon";
    var computersDay = "tues";
    var writingDay = "thurs";
    var mathSeats = 12;
    var computerSeats = 10;
    var writingSeats = 20;
    var daySeats;
    var maxMet;

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

function productOffer(){
    alert("Congratulations on receiving your offer code. Please answer the following questions to check if the offer applies.");

    var premiumUser = prompt("Are you a premium user? y/n");
    var numberOfItems = prompt("How many items did you purchase?");
    var offerExpireMonth = prompt("What month does your offer expire? Please use format: 2 digit month. Example Nov = 11");
    var offerExpireYear = prompt("What year does your offer expire? Please use format: 4 digit year. Example 2022");
    var currentYear;
    var currentMonth;

    function getDateInfo(){
        var date = new Date();
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