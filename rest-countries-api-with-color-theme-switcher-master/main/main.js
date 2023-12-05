const countries = document.querySelector('.countries');
let isDark = true;

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
        country.region.trim().toLowerCase() === selectedRegion.trim().toLowerCase() || selectedRegion === 'Filter by Region'
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
        // img.href = 'details.html';
        
        divImg.appendChild(img);
        div_country.appendChild(divImg);

        const h4 = document.createElement('h4');
        h4.textContent = country.name;
        const population = document.createElement('p');
        const region = document.createElement('p');
        const capital = document.createElement('p');
        /* const region = document.createElement('p');

        // Create a span element for the word 'Region'
        const regionLabel = document.createElement('span');
        regionLabel.textContent = 'Region: ';
        regionLabel.style.fontWeight = 'bold';

        // Append the span element and the text content
        region.appendChild(regionLabel);
        region.appendChild(document.createTextNode(country.region));

        // Append the 'region' element to its parent container
        divText.appendChild(region); */
        // console.log(CountriesData(region, f, country.region));
        const populationLabel = document.createElement('span');
        populationLabel.textContent = 'Population: ';
        
        population.textContent = 'Population: ' + country.population;
        region.textContent = 'Region: ' + country.region;
        capital.textContent = 'Capital: ' + country.capital;
        
        
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


        div_country.addEventListener('click', function () {            
            window.location.href = "details.html"+ "?numcode=" + country.numericCode;
        });
    }

}


document.querySelector('.header__dark-mode i').addEventListener('click', function () {
    // const backgroundColor = isDarkMode ? "hsl(228, 28%, 20%)" : "hsl(227, 47%, 96%)";
    
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
    applyCommonStylesElements(document.querySelectorAll('.country__div'), 'hsl(207, 26%, 17%)', 'white');
    applyCommonStylesElements(document.querySelectorAll('.country__div__text'), 'hsl(207, 26%, 17%)', '');
    document.getElementById('region').style.backgroundColor = 'hsl(209, 23%, 22%)';
    document.getElementById('region').style.color = 'white';
    document.querySelector('.search_bar').style.backgroundColor = 'hsl(209, 23%, 22%)';
    document.getElementById('search_country').style.backgroundColor = 'hsl(209, 23%, 22%)';
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

    document.querySelector('.body').style.backgroundColor = 'white';
    applyCommonStylesElements(document.querySelectorAll('.country__div'), 'white', 'black');
    applyCommonStylesElements(document.querySelectorAll('.country__div__text'), 'hsl(0, 0%, 98%)', '');
    document.getElementById('region').style.backgroundColor = 'white';
    document.getElementById('region').style.color = 'black';
    document.querySelector('.search_bar').style.backgroundColor = 'white';
    document.getElementById('search_country').style.backgroundColor = 'white';
}

/* const region = document.createElement('p');
        // Create a span element for the word 'Region'
        const regionLabel = document.createElement('span');
        regionLabel.textContent = 'Region: ';
        regionLabel.style.fontWeight = 'bold';

        // Append the span element and the text content
        region.appendChild(regionLabel);
        region.appendChild(document.createTextNode(country.region));

        // Append the 'region' element to its parent container
        divText.appendChild(region); */

     /* export default {
            data() {
                return {
                    data: null,
                };
            },
            mounted() {
                fetch('data.json')
                .then((res) => res.json())
                .then((data) => {
                    console.log("data from json");
                    // this.data = data;
                })
                .catch((err) => {
                    console.error(err);
                });
            },
        }; */ 




