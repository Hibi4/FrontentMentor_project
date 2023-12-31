let isDarkMode = true;
let dataResult;

const queryString = window.location.href;
const numcode = window.location.href.split('?')[1].split('=')[1];

/**
 * This code allows to go back to the main page.
 */
document.querySelector('.back__button').addEventListener('click', function () {
    window.location.href = "index.html";
});


/**
 * This function fetches the data from the database. 
 */

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        dataResult = data;
        displayCountryElement(filterResults(data));
    })

/**
 * This function filters and returns only the data of the given country.
 * @param {*} data of the database 
 * @returns the data of the country according to the numericCode 
 */

function filterResults(data) {
    const results = data.filter(country => country.numericCode === numcode);
    return results;
}

/**
 *  This function displays the currencies used in a country.
 * @param {*} currencies of the country 
 * @returns the currencies of the country
 */

function displayCurrencies(currencies) {
    for (const elt of currencies) {
        return elt.name;
    }
}

/**
 * This function displays the differents languages spoken in a country.
 * @param {*} languages of the country 
 */
function displayLanguages(languages) {
    
    for(const elt of languages) {
        document.getElementById('country__languages').innerHTML += elt.name + ' ';
    }
}

/**
 * This function searches a country by alpha3Code.
 * @param {*} data of the database
 * @param {*} alpha3Code of the country
 * @returns the country searched
 */

function searchCountry(data, alpha3Code) {
    const result = data.filter(country => country.alpha3Code === alpha3Code);
    return result;
}


/**
 * This function displays the border countries of a given country.
 * @param {*} countries border countries 
 */
function displayBordersCountries(countries) {
    
    for (const border of countries) {
        const border_countries = searchCountry(dataResult, border);
        const button = document.createElement('button');
        button.textContent = border;
        button.className = 'border__country';

        button.addEventListener('click', function () {
            window.location.href = "details.html?numcode=" + border_countries[0].numericCode;
        });
        
        document.getElementById('border__countries').appendChild(button);

    }
}

/**
 * This function displays the asked elements of a specifiec country. 
 * @param {*} data of the given country
 */

function displayCountryElement(data) {
    
    for (const elt of data) {
        document.getElementById('coutry__flag').src = elt.flag;
        document.querySelector('.details__country__name').innerHTML = elt.name;
        document.getElementById('country__name').innerHTML = elt.nativeName;
        document.getElementById('country__population').innerHTML = elt.population;
        document.getElementById('country__region').innerHTML = elt.region;
        document.getElementById('country__sub__region').innerHTML = elt.subregion;
        document.getElementById('country__capital').innerHTML = elt.capital;
        document.getElementById('country__level__domain').innerHTML = elt.topLevelDomain;
        document.getElementById('country__currentcies').innerHTML = displayCurrencies(elt.currencies);
        displayLanguages(elt.languages);
        displayBordersCountries(elt.borders);
    }
}

/**
 * This code allows to switch between dark and light mode.
 */

document.getElementById('moon_icon_details').addEventListener('click', function () {
    console.log("Click on the moon icon from details page");
    
    if(isDarkMode) {
        applyDarkMode();
        isDarkMode = false;
    } else {
        applyLightMode();
        isDarkMode = true;
    }
    
});


/**
 * This function applies the dark mode.
 */

function applyDarkMode() {
    document.body.style.backgroundColor = 'hsl(200, 15%, 8%)';
    document.querySelector('.header').style.backgroundColor = 'hsl(207, 26%, 17%)';
    document.querySelector('.header').style.color = 'white';
    document.querySelector('.details__country__name').style.color = 'white';
    document.querySelector('.back__button').style.backgroundColor = 'hsl(207, 26%, 17%)';
    document.querySelector('.back__button').style.color = 'white';
    applyCommonStylesElements(document.querySelectorAll('.country__description__text'), '', 'white');
}

/**
 * This function applies the light mode.
 */

function applyLightMode() {
    document.querySelector('.header').style.backgroundColor = 'white';
    document.body.style.backgroundColor = 'white';
    document.querySelector('.header').style.backgroundColor = 'hsl(0, 0%, 98';
    document.querySelector('.header').style.color = 'black';
    document.querySelector('.details__country__name').style.color = 'black';
    applyCommonStylesElements(document.querySelectorAll('.country__description__text'), '', 'black');
    document.querySelector('.back__button').style.backgroundColor = 'white';
    document.querySelector('.back__button').style.color = 'black';
}

/**
 * This function applies the same styles to the given elements.
 * @param {*} elements of the DOM
 * @param {*} backgroundColor to apply to the elements
 * @param {*} textColor to apply to the elements
 */

function applyCommonStylesElements(elements, backgroundColor, textColor) {
    for (const elt of elements) {
        elt.style.backgroundColor = backgroundColor;
        elt.style.color = textColor;
    }
    
}
