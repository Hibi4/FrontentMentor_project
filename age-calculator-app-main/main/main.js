const currentDate = new Date();

function checkKindMonth(month) {
    return month === 4 || month === 6 || month === 9 || month === 11;
}

function calculateAges() {

    const _d = document.getElementById("day-data").value;
    const _m = document.getElementById("months-data").value;
    const _y = document.getElementById("year-data").value;

    let days = parseInt(_d);
    let months = parseInt(_m);
    let years = parseInt(_y);
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

    if ((days < 0 || days > 31) || (months === 2 && days > 29) || (checkKindMonth(months) && days > 30)) {
        console.log("Invalid day");
        document.getElementById("day-data").style.outline = "2px solid red";
        document.querySelector(".main-section #day-title").style.color = "red";
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

        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth() + 1;
        let currentDay = currentDate.getDate();

        let ageInYears = currentYear - years;
        let ageInMonths = currentMonth - months;
        let ageInDays = currentDay - days;

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

/* function calculateAges() {
    // Retrieve input values
    const dayInput = document.getElementById("day-data");
    const monthInput = document.getElementById("months-data");
    const yearInput = document.getElementById("year-data");

    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    // Validate day input
    let isDayValid = validateInput(dayInput, day, 1, 31);
    // Validate month input
    let isMonthValid = validateInput(monthInput, month, 1, 12);
    // Validate year input
    let isYearValid = validateYearInput(yearInput, year);

    if (isDayValid && isMonthValid && isYearValid) {
        calculateAgeResults(day, month, year);
    }
}

function validateInput(inputElement, value, minValue, maxValue) {
    if (isNaN(value) || value < minValue || value > maxValue) {
        console.log("Invalid input. Please enter a valid value.");
        inputElement.style.outline = "2px solid red";
        return false;
    }

    // Reset styling if input is valid
    inputElement.style.outline = "";
    return true;
}

function validateYearInput(inputElement, year) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    if (isNaN(year) || year > currentYear || year <= 0) {
        console.log("Invalid year. Please enter a valid year.");
        inputElement.style.outline = "2px solid red";
        return false;
    }

    // Reset styling if input is valid
    inputElement.style.outline = "";
    return true;
}

function calculateAgeResults(day, month, year) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    let ageInYears = currentYear - year;
    let ageInMonths = currentMonth - month;
    let ageInDays = currentDay - day;

    if (ageInDays < 0) {
        ageInDays += 30;
    }

    if (ageInMonths < 0) {
        ageInMonths += 12;
    }

    // Display age results
    document.getElementById("years-result").innerHTML = ageInYears;
    document.getElementById("months-result").innerHTML = ageInMonths;
    document.getElementById("day-result").innerHTML = ageInDays;
} */