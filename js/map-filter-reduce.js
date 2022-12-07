"use strict"

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//question 2
let threeOrMore = users.filter(user => user.languages.length >= 3);
console.log(threeOrMore);

//question 3
let userEmails = users.map(user => user.email);
console.log(userEmails);

//question 4
let totalYearsExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);
console.log(totalYearsExperience)
console.log(totalYearsExperience / users.length);

//question 5

let longestEmail = users.reduce((longestUserEmail, userEmail) => {
    if (userEmail.email.length > longestUserEmail.email.length){
        longestUserEmail = userEmail;
    }
    return longestUserEmail;
}, {email:""});
console.log(longestEmail);

//question 6
const usersNames = users.reduce((listOfNames, name) => {
    return listOfNames + name.name + ", ";
}, "Your Instructors Are: ");
console.log(usersNames + ".")

//bonus


