const steps = document.querySelectorAll(".step");

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        displayCrewElements(data.crew);
        setActiveCrew(0, data.crew);
    })
    .catch(error => console.log("Error lors du chargement de données "+error));

    function displayCrewElements(crews) {
        steps.forEach((step, index) => {
            step.addEventListener('click', function() {
                setActiveCrew(index, crews)
            })
        })
    }

    function setActiveCrew(index, crews) {
        const rol = document.getElementById('crew__role');
        const name = document.getElementById('crew__name');
        const bio = document.getElementById('crew__bio');
        const image = document.getElementById('crew__picture');

        const crewMember = crews[index];
        if(crewMember) {
            name.textContent = crewMember.name
                rol.textContent = crewMember.role;
                bio.textContent = crewMember.bio;
                image.src = crewMember.images.png;
        }
    }
