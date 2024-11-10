const links = document.querySelectorAll(".data__number");

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // displayCrewElements(data.crew);
        displayTechnologyElements(data.technology)
    })
    .catch(error => console.log("Error lors du chargement de données "+error));

    function displayTechnologyElements(technologies) {
        const technology__name = document.getElementById('technology__name');
        const technology__description = document.getElementById('technology__description');
        const technology__image = document.getElementById('technology__image');


        links.forEach((technology, index) => {
            technology.addEventListener('click', function () {
                const tech = technologies[index];
                if(tech) {
                    console.log(tech.name);
                    technology__name.innerText = tech.name;
                    technology__description.innerText = tech.description;
                }
                
                /* if(tech) {
                    console.log(tech.name);
                    console.log("Click on logs" );
                } else {
                    console.log("in de else method")
                } */ 

            })
        })
    }
/* 
const steps = document.querySelectorAll(".step");


    function displayCrewElements(crew) {
        const rol = document.getElementById('crew__role');
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
            
        });
    }*/

    /* 
    https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_form_steps
    */ 
