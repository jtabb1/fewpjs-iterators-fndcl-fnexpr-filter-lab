// Code your solution here

function findMatching(arr, match) {
    return arr.filter( et => {
        return et.toLowerCase() === match.toLowerCase();
    });
}

function fuzzyMatch(arr, match) {
    return arr.filter( et => {
        return et.substring(0,match.length) === match;
    });
}

function matchName(arr, match) {
    return arr.filter( et => {
        return et.name === match;
    });
}

// Reviewer: Please ignore the below, which was for construction
// purposes only.

// function findMatching(arr = [], match = "") {
//     return arr.filter( et => {
//         return et.toLowerCase() === match.toLowerCase();
//     });
// }

// function fuzzyMatch(arr = [], match = "") {
//     return arr.filter( et => {
//         return et.substring(0,match.length) === match;
//     });
// }

// function matchName(arr = [{}], match = "") {
//     return arr.filter( et => {
//         return et.name === match;
//     });
// }

function testFcn() {
    const drivers01 = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
    const drivers02 = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
    const drivers03 = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh' },
        {
        name: 'Sammy',
        hometown: 'New York' } ,
        {
        name: 'Sally',
        hometown: 'Cleveland' },
        {
        name: 'Annette',
        hometown: 'Los Angeles' },
        {
        name: 'Bobby',
        hometown: 'Tampa Bay' }
    ];
    match01 = 'Bobby';
    match02 = 'Sammy';
    match03 = 'Susan';
    function test01(arr = [], match = "") {
        return arr.filter( et => {
            return et.substring(0,match.length-1) === match;
            });
    }

    console.log(test01(drivers02, match01));
}

//testFcn();
