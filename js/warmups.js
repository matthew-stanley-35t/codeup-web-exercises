function howMuch(userObject){
    return userObject.price;
}

function getLongestString(arr){
    let max_str = arr[0].length;
    let longestString = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let newMax = arr[i].length;
        if (newMax > max_str) {
            longestString = arr[i];
            max_str = newMax;
        }
    }
    return longestString;
}

// let sampleArr = ["the", "longest", "string"]
// console.log(getLongestString(sampleArr));

const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "September 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

function getTallestHamster(arr) {
    let i = 0;
    let tallest = 0;
    let tallestHamster;
    while (i < (hamsters.length)) {
        if (hamsters[i].heightInMM > tallest){
            tallest = hamsters[i].heightInMM;
            tallestHamster = hamsters[i]
        }
        i++;
    }
    return tallestHamster;
}
console.log (getTallestHamster(hamsters)); // should return {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"};









