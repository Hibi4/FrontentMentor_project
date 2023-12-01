const countries = document.querySelector('.countries');
const options = document.querySelectorAll('options');

fetch('data.json')
    .then(response => response.json())
    .then(data => {

        displayElements(data);

        document.getElementById('region').addEventListener('change', function (e) {

            console.log(updateCountriesByRegion(data, e.target.value));
            const filterResults = updateCountriesByRegion(data, e.target.value);
            countries.innerHTML = '';

            displayElements(filterResults);
            
        });

    });

function updateCountriesByRegion(data, selectedRegion) {

    console.log("selected region: " + selectedRegion);

    const results = data.filter(country =>
        country.region.trim().toLowerCase() === selectedRegion.trim().toLowerCase()
    );
    return results;
}

function displayElements(data) {

    for (const country of data) {

        const div_country = document.createElement('div');
        const img = document.createElement('img');
        const divImg = document.createElement('div');
        const divText = document.createElement('div');
        img.src = country.flag;

        img.alt = country.name;
        img.className = 'country__div__img';
        divImg.appendChild(img);
        div_country.appendChild(divImg);

        const h4 = document.createElement('h4');
        h4.textContent = country.name;
        const population = document.createElement('p');
        const region = document.createElement('p');
        const capital = document.createElement('p');

        population.textContent = 'Population: ' + country.population;
        region.textContent = 'Region: ' + country.region;
        capital.textContent = 'Capital: ' + country.capital;
        // add style to the div
        div_country.className = 'country__div';
        divText.className = 'country__div__text';
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

    }

}

document.querySelector('.moon_icon').addEventListener('click', function () {
    let isDark = true;
    if(isDark) {
        applyDarkMode();
        isDark = false;
    } else {
        applyLightMode();
        isDark = true;
    }
    
});

function applyDarkMode() {
    document.body.style.backgroundColor = 'black';
    applyCommonStylesElements(document.querySelectorAll('.country__div'), 'black', 'white');
    applyCommonStylesElements(document.querySelectorAll('.country__div__text'), 'hsl(207, 26%, 17%)', '');
    
    /* document.querySelector('.country__div__text').style.color = 'white';
    document.querySelector('.country__region').style.color = 'white';
    document.querySelector('.country__population').style.color = 'white';
    document.querySelector('.country__capital').style.color = 'white'; */
    /* div_country.className = 'country__div';
        divText.className = 'country__div__text';
        h4.className = 'country__name__text';
        population.className = 'country__population';
        region.className = 'country__region';
        capital.className = 'country__capital'; */
}

function applyCommonStylesElements(elements, backgroundColor, textColor) {
    for (const elt of elements) {
        elt.style.backgroundColor = backgroundColor;
        elt.style.color = textColor;
    }
    
}

function applyLightMode() {
    document.body.style.backgroundColor = 'white';
}

/* function changeBackgroundColor() {
    document.body.style.backgroundColor = 'black';
} */

