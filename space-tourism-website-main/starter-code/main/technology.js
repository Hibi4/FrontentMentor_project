const links = document.querySelectorAll(".data__number");

fetch('data.json')
    .then(response => response.json())
    .then(data => {

        displayTechnologyElements(data.technology);

        setActiveTechnology(0, data.technology);
    })
    .catch(error => console.log("Error lors du chargement de données " + error));

function displayTechnologyElements(technologies) {

    links.forEach((div, index) => {
        div.addEventListener('click', function () {
            setActiveTechnology(index, technologies);
        });
    });
}

function setActiveTechnology(index, technologies) {
    const technology__name = document.getElementById('technology__name');
    const technology__description = document.getElementById('technology__description');
    const technology__image = document.getElementById('technology__image');

    links.forEach(d => d.classList.remove('activeLink'));

    links[index].classList.add('activeLink');

    const tech = technologies[index];
    if (tech) {
        console.log(tech.name);
        technology__name.innerText = tech.name;
        technology__description.innerText = tech.description;
        technology__image.src = tech.images.portrait;
    }
}
