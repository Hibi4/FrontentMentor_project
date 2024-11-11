const steps = document.querySelectorAll(".step");

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        displayCrewElements(data.crew);
        // set Active Crew 
        setActiveCrew(0, data.crew);
    })
    .catch(error => console.log("Error lors du chargement de données "+error));

    function displayCrewElements(crews) {
        steps.forEach((step, index) => {
            step.addEventListener('click', function() {
                setActiveCrew(index, crews)
            })
        })
       /*  const rol = document.getElementById('crew__role');
        const name = document.getElementById('crew__name');
        const bio = document.getElementById('crew__bio');
        const image = document.getElementById('crew__picture');
        steps.forEach((step, index) => {
            step.addEventListener('click', function () {
                const crewMember = crew[index]; // Obtenir le membre de l'équipage correspondant à l'index
                if (crewMember) {
                    name.textContent = crewMember.name
                    rol.textContent = crewMember.role; // Afficher le nom de l'équipage
                    bio.textContent = crewMember.bio;
                    // display image 
                    image.src = crewMember.images.png;
                }
            })
            
        }); */ 
    }

    function setActiveCrew(index, crews) {
        const rol = document.getElementById('crew__role');
        const name = document.getElementById('crew__name');
        const bio = document.getElementById('crew__bio');
        const image = document.getElementById('crew__picture');

        const crewMember = crews[index];
        if(crewMember) {
            name.textContent = crewMember.name
                rol.textContent = crewMember.role; // Afficher le nom de l'équipage
                bio.textContent = crewMember.bio;
                // display image 
                image.src = crewMember.images.png;
        }
    }

    /* 
    https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_form_steps
    */ 

 /* 
 function displayTechnologyElements(technologies) {
    // const nameDisplay = document.querySelector('.name-display'); // Conteneur pour afficher le nom

    // Ajouter un gestionnaire d'événements à chaque div
    links.forEach((div, index) => {
        div.addEventListener('click', function () {
            setActiveTechnology(index, technologies); // Appeler la fonction pour activer l'élément cliqué
        });
    });
}

function setActiveTechnology(index, technologies) {
    const technology__name = document.getElementById('technology__name');
    const technology__description = document.getElementById('technology__description');
    const technology__image = document.getElementById('technology__image');

    // Retirer la classe active de tous les divs
    links.forEach(d => d.classList.remove('activeLink'));

    // Ajouter la classe active à l'élément correspondant à l'index
    links[index].classList.add('activeLink');

    // Afficher le nom de la technologie correspondante
    
        const tech = technologies[index];
        if (tech) {
            console.log(tech.name);
            technology__name.innerText = tech.name;
            technology__description.innerText = tech.description;
            technology__image.src = tech.images.portrait;
        }
    } */ 
