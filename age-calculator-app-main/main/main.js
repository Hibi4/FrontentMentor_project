
var currentDate = new Date();

function checkKindMonth(month) {
    if(month === 4 || month === 6 || month === 9 || month === 11) {
        return true;
    }
    return false;
}

function calculateAges() {

    var _d = document.getElementById("day-data").value;
    const _m = document.getElementById("months-data").value;
    const _y = document.getElementById("year-data").value;

    var days = parseInt(_d);
    var months = parseInt(_m);
    var years = parseInt(_y);
    let isDayValid = true;
    let isMonthValid = true;
    let isYearValid = true;

    if(_d === "") {
        console.log("This field is required ");
        document.getElementById("day-data").style.outline = "2px solid red";
        document.querySelector(".main-section #day-title").style.color = "red";
        isDayValid = false;
    }

    if(_m === "") {
        console.log("This field is required ");
        document.getElementById("months-data").style.outline = "2px solid red";
        document.querySelector(".main-section #month-title").style.color = "red";
        isMonthValid = false;
    }

    if(_y === "") {
        console.log("This field is required ");
        document.getElementById("year-data").style.outline = "2px solid red";
        document.querySelector(".main-section #year-title").style.color = "red";
        isYearValid = false;
    }

    if ((days < 0 || days > 31) || (months === 2 && days > 29) || (checkKindMonth(months) && days >= 30)) {
        console.log("Invalid day");
        document.getElementById("day-data").style.outline = "2px solid red";
        document.querySelector(".main-section #day-title").style.color = "red";
        // document.getElementById("day_error_message").innerHTML = "Invalid day";
        isDayValid = false;
    }

    if (months < 0 || months > 12) {
        
        console.log("Invalid month");
        document.getElementById("months-data").style.outline = "2px solid red";
        document.querySelector(".main-section #month-title").style.color = "red";
        isMonthValid = false;
    }

    if (years > currentDate.getFullYear() || years <= 0) {
        console.log("Invalid year not possible to be born in the future");
        document.getElementById("year-data").style.outline = "2px solid red";
        document.querySelector(".main-section #year-title").style.color = "red";
        isYearValid = false;
    }
   
    if(isDayValid && isMonthValid && isYearValid) {

        var currentYear = currentDate.getFullYear();
        var currentMonth = currentDate.getMonth() + 1;
        var currentDay = currentDate.getDate();

        var ageInYears = currentYear - years;
        var ageInMonths = currentMonth - months;
        var ageInDays = currentDay - days;

        if(ageInDays < 0) {
            ageInDays = 30 + ageInDays;
        }

        if(ageInMonths < 0) {
            ageInMonths = 12 + ageInMonths;
        }
        
        document.getElementById("years-result").innerHTML = ageInYears;
        document.getElementById("months-result").innerHTML = ageInMonths;
        document.getElementById("day-result").innerHTML = ageInDays;
        
    }
}