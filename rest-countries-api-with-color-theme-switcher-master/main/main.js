const countries = document.querySelector('.countries');

fetch('data.json')
   .then(response => response.json())
   .then(data => {
        // console.log(data);

        for(const country of data) {
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
            divText.appendChild(h4);
            divText.appendChild(population);
            divText.appendChild(region);
            divText.appendChild(capital);
            div_country.appendChild(divText);
            countries.appendChild(div_country);

        }
});

/* document.getElementById('search_country').addEventListener('click', function(e) {
    console.log('search_country');
}); */