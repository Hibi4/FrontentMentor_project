const steps = document.querySelectorAll(".step");

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        displayCrewElements(data.crew);
    })
    .catch(error => console.log("Error lors du chargement de données "+error));

    function displayCrewElements(crew) {
        const rol = document.getElementById('crew__role');
        const name = document.getElementById('crew__name');
        const bio = document.getElementById('crew__bio');
        steps.forEach((step, index) => {
            step.addEventListener('click', function () {
                const crewMember = crew[index]; // Obtenir le membre de l'équipage correspondant à l'index
                if (crewMember) {
                    name.textContent = crewMember.name
                    rol.textContent = crewMember.role; // Afficher le nom de l'équipage
                    bio.textContent = crewMember.bio;
                    console.log(crewMember.bio);
                }
            })
            
        });
    }

    /* 
    https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_form_steps
    */ 

    function displays(crews) {
        const role = document.getElementById('crew__role');
    }
