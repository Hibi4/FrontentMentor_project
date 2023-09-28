// write a function who takes three parameters and returns the the age in days months and years
// the function should return a string like this: "You are 10 years, 2 months and 3 days old"
// call the function with the following parameters: 10, 2, 3
// log the result to the console

// write a function who takes three parameters and calculates and returns the current age in days months and years according to the current year

// call the function with the following parameters: 1990, 2, 3
// log the result to the console

var currentDate = new Date();
const d = document.getElementById("day-data").value;
const m = document.getElementById("months-data").value;
const y = document.getElementById("year-data").value;

console.log('days: ' + d);
console.log('days: ' + m);
console.log('days: ' + y);

function isGivenDatavalid(days, months, years) {
    
    
    if ((days < 0 || days > 31) && d != "") {
        console.log("Invalid day");
        return false;
    }

    if ((months < 0 || months > 12) && m != "") {
        console.log("Invalid month");
        return false;
    }

    if ((years > currentDate.getFullYear) && y != "") {
        console.log("Invalid year");
        return false;
    }

    return "";
}

function calculatesCurrentAge(days, months, years) {
    
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();

    var ageInYears = currentYear - years;
    var ageInMonths = currentMonth - months;
    var ageInDays = currentDay - days;

    return "You are " + ageInYears + " years, " + ageInMonths + " months and " + ageInDays + " days old";
}

console.log("Calculate current age");
console.log(calculatesCurrentAge(24, 9, 1984));