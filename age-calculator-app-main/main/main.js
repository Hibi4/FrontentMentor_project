// write a function who takes three parameters and returns the the age in days months and years
// the function should return a string like this: "You are 10 years, 2 months and 3 days old"
// call the function with the following parameters: 10, 2, 3
// log the result to the console

// write a function who takes three parameters and calculates and returns the current age in days months and years according to the current year

// call the function with the following parameters: 1990, 2, 3
// log the result to the console

var currentDate = new Date();
// const _d = document.querySelector("#day-data").value;



/* console.log('days: ' + _d);
console.log('days: ' + _m);
console.log('days: ' + _y);*/

function isGivenDatavalid() {
    var _d = document.getElementById("day-data").value;
    const _m = document.getElementById("months-data").value;
    const _y = document.getElementById("year-data").value;

    console.log("isGivenDatavalid");
    var days = parseInt(_d);
    var months = parseInt(_m);
    var years = parseInt(_y);
    console.log("days: " + days);


    if ((days < 0 || days > 31) || _d === "") {
        console.log("Invalid day");
        document.getElementById("day-data").style.outline = "2px solid red";
        document.querySelector(".main-section #day-title").style.color = "red";
        // return false;
    }

    if ((months < 0 || months > 12) || _m === "") {
        console.log("Invalid month");
        document.getElementById("months-data").style.outline = "2px solid red";
        document.querySelector(".main-section #month-title").style.color = "red";
        // return false;
    }

    if ((years > currentDate.getFullYear) || _y === "") {
        console.log("Invalid year");
        document.getElementById("year-data").style.outline = "2px solid red";
        document.querySelector(".main-section #year-title").style.color = "red";
        // return false;
    }

    return "";
}

function calculateAges() {
    var days = parseInt(_d);
    var months = parseInt(_m);
    var years = parseInt(_y);

    if(!isGivenDatavalid(days, months, years)) {
        // call calculatesCurrentAge function
        var currentYear = currentDate.getFullYear();
        var currentMonth = currentDate.getMonth() + 1;
        var currentDay = currentDate.getDate();

        var ageInYears = currentYear - years;
        var ageInMonths = currentMonth - months;
        var ageInDays = currentDay - days;
        
        document.getElementById("years-result").innerHTML = ageInYears;
        document.getElementById("months-result").innerHTML = ageInMonths;
        document.getElementById("days-result").innerHTML = ageInDays;

    } 
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