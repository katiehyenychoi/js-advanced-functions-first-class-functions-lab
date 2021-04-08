// Code your solution in this file!

const returnFirstTwoDrivers = function (arr) {
    let newArr = [];
    newArr = arr.slice(0, 2);
    return newArr;
}

const returnLastTwoDrivers = function (arr) {
    let newArr = [];
    newArr = arr.slice(-2);
    return newArr;
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    function multiplyFare(fare) {
        let multiplier = int;
        let newFare = fare * multiplier;
        return newFare;
    }
    // return multiplyFare(myMultiplier); // This executes the fcn
    return multiplyFare; //Problem asks to 'return the function' not return the 'fare'.
};

//Q- why return (fare) => fare*fare; did not work

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare);
};


const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare);
};


function selectDifferentDrivers(drivers, driversToReturn) {
    return driversToReturn(drivers);
};