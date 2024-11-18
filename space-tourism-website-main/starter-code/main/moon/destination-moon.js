fetch('data.json')
    .then(response => response.json())
    .then(data => {
        displayElementsT(data.destinations);
        
        setActiveDestination (0, data.destinations);
    })
    .catch(error => console.log("Erreur lors du chargement de données: "+error));

    function displayElements(destinations) {
        const namesContainer = document.querySelector(".nav__destination");
        namesContainer.innerHTML = '';
        
        destinations.forEach(destination => {
            const nameElement = document.createElement('a'); 
            nameElement.textContent = destination.name; 
            nameElement.href = "#"; 
            nameElement.classList.add('nav__link'); 
            nameElement.setAttribute('data-destination', destination.name); 
            namesContainer.appendChild(nameElement);
        });

        const links = document.querySelectorAll(".nav__link");
        links.forEach((link) => {
            link.addEventListener('click', function(e) {
                
                e.preventDefault();
                const destinationName = this.getAttribute('data-destination'); 
                document.getElementById('destinationName').textContent= destinationName;
                console.log(`Clicked on: ${destinationName}`);
                displayDescription(destinationName, destinations);
            }); 
            
        });
       
    }

    function displayElementsT(destinations) {
        const namesContainer = document.querySelector(".nav__destination");
        namesContainer.innerHTML = '';
        
        destinations.forEach(destination => {
            const nameElement = document.createElement('a'); 
            nameElement.textContent = destination.name; 
            nameElement.href = "#"; 
            nameElement.classList.add('nav__link'); 
            nameElement.setAttribute('data-destination', destination.name); 
            namesContainer.appendChild(nameElement); 
        });

        const links = document.querySelectorAll(".nav__link");
        links.forEach((link, index) => {
            link.addEventListener('click', function(e) {
                
                e.preventDefault(); 
                console.log("link click");
                setActiveDestination(index, destinations);
            }); 
            
        });
    }

    function setActiveDestination(index, destinations) {
        const messageContainer = document.querySelector('#destinationDescription');
        const messageName = document.getElementById('destinationName');

        const distance = document.getElementById('distance');
        const travel = document.getElementById('travel');
        const image = document.getElementById('logo__image__destination');
        
        const destination = destinations[index]; 
        if (destination) {
            messageName.textContent = destination.name;
            messageContainer.textContent = destination.description; 
            distance.textContent = destination.distance;
            travel.textContent = destination.travel;
            image.src = destination.images.png;
        } else {
            messageContainer.textContent = `Aucune description trouvée pour ${destinationName}.`;
        }

    }

    function displayDescription(destinationName, destinations) {
        const messageContainer = document.querySelector('#destinationDescription'); // Utiliser le conteneur pour afficher la description
        const messageName = document.getElementById('destinationName');
        const distance = document.getElementById('distance');
        const travel = document.getElementById('travel');
        const image = document.getElementById('logo__image__destination');
        messageName.textContent = destinationName;
        const destination = destinations.find(dest => dest.name === destinationName);
        
        if (destination) {
            messageContainer.textContent = destination.description; 
            distance.textContent = destination.distance;
            travel.textContent = destination.travel;
            image.src = destination.images.png;
        } else {
            messageContainer.textContent = `Aucune description trouvée pour ${destinationName}.`;
        }
    }