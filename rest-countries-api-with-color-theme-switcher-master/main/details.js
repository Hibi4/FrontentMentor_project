let isDarkMode = true;

document.querySelector('.back__button').addEventListener('click', function () {
    window.location.href = "index.html";
});

// add data to the details page according to the country name given in the url
const queryString = window.location.href;
/* const urlParams = new URLSearchParams(queryString);
const countryName = urlParams.get('name'); */
// console.log( "country__name: "+ window.location.href.split('?')[1].split('=')[1]);
const numcode = window.location.href.split('?')[1].split('=')[1];
console.log( "NumCode: "+numcode);

// Explain why I have used to fetch by numcode instead of name

/**
 * This code displays the returned data from filterResults function. 
 */

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(filterResults(data));
        displayCountryElement(filterResults(data));
    })

/**
 * This function filters and returns the only data of the given country.
 * @param {*} data of the database 
 * @returns the data of the country according to the numericCode 
 */

function filterResults(data) {
    const results = data.filter(country => country.numericCode === numcode);
    return results;
}

/**
 * This function displays the currencies used in a country. 
 * @param {*} currencies of the country 
 * @returns 
 */

function displayCurrencies(currencies) {
    for (const elt of currencies) {
        return elt.name;
    }
}

/* function displayLanguages(languages) {
    for(const key in languages) {
        if (jsonData.hasOwnProperty(key)) {
        languagesSpan.innerHTML += jsonData[key].nativeName + ' ';
      }
        if(languages.hasOwnProperty(key)) {
            // document.getElementById('country__languages').innerHTML += elt.name + ' ';
            document.getElementById('country__languages').innerHTML += languages[key].name = ' ';
        }
    }
} */

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
 * This function displays the border countries of a given country.
 * @param {*} countries border countries 
 */
function displayBordersCountries(countries) {
    /* const totalProps = countries.reduce((a, obj) => a + Object.keys(obj).length, 0);
    console.log("Array size: "+totalProps); */
    // console.log("border countries: "+countries.length);
    /* if(totalProps === 0) {
        console.log("No border countries");
    } */
    
    /* console.log("Border array size: "+countries.length);
    if(isNaN(countries.length)) {
        console.log("This country has no border countries")
    } */
    console.log("countries: "+countries);
    for (const border of countries) {
        const button = document.createElement('button');
        button.textContent = border;
        button.className = 'border__country';
        /* button.addEventListener('click', function () {
            console.log("From border button");
            window.location.href = "details.html?numcode=" + border;
        }); */
       // document.getElementById('border__countries').innerHTML += border + ' ';
        
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

function applyDarkMode() {
    document.querySelector('.header').style.backgroundColor = 'hsl(207, 26%, 17%)';
    document.body.style.backgroundColor = 'hsl(207, 26%, 17%)';
    // applyCommonStylesElements(document.querySelectorAll('.country__div__text'), 'hsl(207, 26%, 17%)', '');
    // country__description__text
    applyCommonStylesElements(document.querySelectorAll('.country__description__text'), '', 'white');
}

function applyLightMode() {
    document.querySelector('.header').style.backgroundColor = 'white';
    document.body.style.backgroundColor = 'white';
}

function applyCommonStylesElements(elements, backgroundColor, textColor) {
    for (const elt of elements) {
        elt.style.backgroundColor = backgroundColor;
        elt.style.color = textColor;
    }
    
}

// fetch data from the api
/*  fetch('https://restcountries.eu/rest/v2/name/' + countryName)
    .then((res) => res.json())
    .then((data) => {
        console.log("display data from specific country");
        console.log(data); */
        // const countries = document.querySelector('.countries');
        /* const div_country = document.createElement('div');
        const img = document.createElement('img');
        const divImg = document.createElement('div');
        const divText = document.createElement('div');
        img.src = data[0].flag;

        img.alt = data[0].name;
        img.className = 'country__div__img';
        img.href = 'details.html';

        divImg.appendChild(img);
        div_country.appendChild(divImg);

        const h4 = document.createElement('h4');
        h4.textContent = data[0].name;
        const population = document.createElement('p');
        const region = document.createElement('p');
        const capital = document.createElement('p');
        const nativeName = document.createElement('p');
        const subRegion = document.createElement('p');
        const topLevelDomain = document.createElement('p');
        const currencies = document.createElement('p');
        const languages = document.createElement('p');
        const borderCountries = document.createElement('p');
        
        const populationLabel = document.createElement('span');
        populationLabel.textContent = 'Population: ';

        population.textContent = 'Population: ' + data[0].population;
        region.textContent = 'Region: ' + data[0].region;
        capital.textContent = 'Capital: ' + data[0].capital;
        nativeName.textContent = 'Native Name: ' + data[0].nativeName;
        subRegion.textContent = 'Sub Region: ' + data[0].subregion;
        topLevelDomain.textContent = 'Top Level Domain: ' + data[0].topLevelDomain;
        currencies.textContent = 'Currencies: ' + data[0].currencies[0].name; 
     });*/

// Import Vue from the Vue.js library (make sure to include Vue in your project)
/*     import Vue from 'vue';

    // Create a new Vue instance
    const app = new Vue({
        data() {
            return {
                data: null,
            };
        },
        mounted() {
            fetch('data.json')
                .then((res) => res.json())
                .then((data) => {
                    // this.data = data;
                    console.log(data);
                })
                .catch((err) => {
                    console.error(err);
                });
        },
    });

    // Mount the Vue instance on an element in your HTML
    app.$mount('#app'); // Replace '#app' with the ID of the element where you want to mount your Vue app
 */
