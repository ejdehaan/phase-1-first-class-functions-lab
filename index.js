const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (array) {
    let newArray = array.slice(0, 2)
    return newArray
}

const returnLastTwoDrivers = function (array) {
    let newArray = array.slice(2, 5)
    return newArray
}

let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
];
   


function fareMultiplier() {
    return num1 * multiplier
}

function createFareMultiplier() {
    return fareMultiplier()
}





