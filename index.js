// Code your solution in this file!
const drivers = ['Ken', 'Brian', 'Blair', 'Kevin']
const returnFirstTwoDrivers = drivers => drivers.slice(0,2);

const returnLastTwoDrivers = drivers => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function(fare = 4) {
        return fare * num
    }
}

const fareDoubler = function (fare) {
return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}
function selectDifferentDrivers(drivers1, drivers2) {
    return drivers2(drivers1);
  }