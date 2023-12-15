const countries = document.querySelector('.countries');
let isDark = true;
let population_text = 'Population: ';
const region_text = 'Region';
const capital_text = 'Capital';
let dataResult;

/**
 * This function fetches the data from the database.
 */

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        dataResult = data;
        displayElements(data);
        document.getElementById('region').addEventListener('change', function (e) {

            
            const filterResults = updateCountriesByRegion(data, e.target.value);
            countries.innerHTML = '';
            displayElements(filterResults);
            
        }); 

    });

    /**
     * This function filters the countries by region.
     * @param {*} data 
     * @param {*} selectedRegion 
     * @returns 
     */

function updateCountriesByRegion(data, selectedRegion) {

    const results = data.filter(country =>
        country.region.trim().toLowerCase() === selectedRegion.trim().toLowerCase() || selectedRegion === 'Filter by Region'
    );
    return results;
}

/**
 * This function searches a country by name.
 * @param {*} data of the database
 * @param {*} countryName of the country
 * @returns the country searched
 */

function searchCountrybyName(data, countryName) {
    const results = data.filter(country =>
        country.name.trim().toLowerCase() === countryName.trim().toLowerCase()
    );
    return results;
}

/**
 * This function displays the country searched.
 */

function displaycountry() {
    const result = searchCountrybyName(dataResult, document.getElementById('search_country').value);
    countries.innerHTML = '';
    displayElements(result);
}

/**
 * This function handles the event of the search bar.
 * @param {*} event 
 */

function handleEvent(event) {
    if (event.key === "Enter" || event.type === "click") {
      displaycountry();
    }
}

document.getElementById("search_country").addEventListener("keyup", handleEvent);
document.querySelector(".search_bar button").addEventListener("click", handleEvent);

/**
 * This function displays the countries.
 * @param {*} data of the database
 */

function displayElements(data) {

    for (const country of data) {

        const div_country = document.createElement('div');
        const img = document.createElement('img');
        const divImg = document.createElement('div');
        const divText = document.createElement('div');
        img.src = country.flag;

        img.alt = country.name;
        img.className = 'country__div__img';
        img.href = 'details.html';

        divImg.appendChild(img);
        div_country.appendChild(divImg);

        const h4 = document.createElement('h4');
        h4.textContent = country.name;
        const population = document.createElement('p');
        const region = document.createElement('p');
        const capital = document.createElement('p');
        
        population.textContent = population_text + country.population;
        
        region.textContent = 'Region: ' + country.region;
        capital.textContent = 'Capital: ' + country.capital;
        
        
        div_country.className = 'country__div';
        divText.className = 'country__div__text';
        divImg.className = 'country__div__img__flag';
        h4.className = 'country__name__text';
        population.className = 'country__population';
        region.className = 'country__region';
        capital.className = 'country__capital';

        divText.appendChild(h4);
        divText.appendChild(population);
        divText.appendChild(region);
        divText.appendChild(capital);
        div_country.appendChild(divText);
        countries.appendChild(div_country);

        div_country.addEventListener('click', function () {
            window.location.href = "details.html"+ "?numcode=" + country.numericCode;
        });
    }

}

/**
 * This function handles the event of the dark mode.
 */

document.querySelector('.header__dark-mode i').addEventListener('click', function () {
    
    if(isDark) {
        applyDarkMode();
        isDark = false;
    } else {
        applyLightMode();
        isDark = true;
    }
    
});

/**
 * This function applies the dark mode.
 */

function applyDarkMode() {
    document.body.style.backgroundColor = 'hsl(200, 15%, 8%)';
    applyCommonStylesElements(document.querySelectorAll('.country__div'), 'hsl(207, 26%, 17%)', 'white');
    applyCommonStylesElements(document.querySelectorAll('.country__div__text'), 'hsl(207, 26%, 17%)', '');
    document.querySelector('.header').style.backgroundColor = 'hsl(207, 26%, 17%)';
    document.querySelector('.header').style.color = 'white';
    document.getElementById('region').style.backgroundColor = 'hsl(209, 23%, 22%)';
    document.getElementById('region').style.color = 'white';
    document.querySelector('.search_bar').style.backgroundColor = 'hsl(209, 23%, 22%)';
    document.getElementById('search_country').style.backgroundColor = 'hsl(209, 23%, 22%)';
    document.querySelector('.search_bar button').style.backgroundColor = 'hsl(209, 23%, 22%)';
}


/**
 * This function applies the light mode.
 */

function applyLightMode() {
    document.querySelector('.body').style.backgroundColor = 'white';
    applyCommonStylesElements(document.querySelectorAll('.country__div'), 'white', 'black');
    applyCommonStylesElements(document.querySelectorAll('.country__div__text'), 'hsl(0, 0%, 98%)', '');
    document.querySelector('.header').style.backgroundColor = 'hsl(0, 0%, 98%)';
    document.querySelector('.header').style.color = 'black';
    document.getElementById('region').style.backgroundColor = 'white';
    document.getElementById('region').style.color = 'black';
    document.querySelector('.search_bar').style.backgroundColor = 'white';
    document.getElementById('search_country').style.backgroundColor = 'white';
    document.querySelector('.search_bar button').style.backgroundColor = 'black';
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




