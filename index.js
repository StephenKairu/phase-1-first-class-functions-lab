// Code your solution in this file!
const returnFirstTwoDrivers= (drivers) => {
    return [...drivers].slice(0, 2);
};

const returnLastTwoDrivers = (drivers) => {
    return [...drivers].slice(drivers.length-2, drivers.length);
  };

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn) {
    return fn(drivers)
}
