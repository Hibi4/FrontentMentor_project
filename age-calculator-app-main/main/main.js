
function checkKindMonth(month) {
    return month === 4 || month === 6 || month === 9 || month === 11;
}

let monthValue = 0;
let dayValue = 0;

function calculateAges() {
    // Retrieve input values
    const dayInput = document.getElementById("day-data");
    const monthInput = document.getElementById("months-data");
    const yearInput = document.getElementById("year-data");

    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    monthValue = month;
    dayValue = day;

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
    if (isNaN(value) || value < minValue || value > maxValue || checkKindMonth(monthValue) && dayValue > 30 ) {
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
}