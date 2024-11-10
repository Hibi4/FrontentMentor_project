// const container = document.querySelector(".container");
console.log("moon js file");
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        displayElements(data.destinations);
    })
    .catch(error => console.log("Erreur lors du chargement de données: "+error));

    function displayElements(destinations) {
        const namesContainer = document.querySelector(".nav__destination");
        namesContainer.innerHTML = '';
        
        destinations.forEach(destination => {
            const nameElement = document.createElement('a'); // Créer un lien
            nameElement.textContent = destination.name; // Utiliser 'destination.name'
            nameElement.href = "#"; // Empêcher le rechargement de la page
            nameElement.classList.add('nav__link'); // Ajouter une classe pour le style
            nameElement.setAttribute('data-destination', destination.name); // Ajouter un attribut de données
            namesContainer.appendChild(nameElement); // Ajouter le nouvel élément au conteneur
        });

        // Ajouter un gestionnaire d'événements pour les liens
        // const links = document.querySelectorAll('.nav__link');
        // const links = document.getElementsByClassName(".nav__link");
        const links = document.querySelectorAll(".nav__link");
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                
                e.preventDefault(); // Empêcher le comportement par défaut du lien
                // const destinationName = this.getAttribute('data-destination'); // Obtenir le nom de la destination
                // displayMessage(destinationName); // Appeler la fonction pour afficher le message 
                const destinationName = this.getAttribute('data-destination'); // Obtenir le nom de la destination
                //document.getElementById('destinationName').appendChild(destinationName);
                console.log(`Clicked on: ${destinationName}`); // Vérifiez si le clic est enregistré
                displayDescription(destinationName, destinations); // Appeler la fonction pour afficher la description
            }); 
            
        });
       
    }

    function displayDescription(destinationName, destinations) {
        const messageContainer = document.querySelector('#destinationDescription'); // Utiliser le conteneur pour afficher la description
        const messageName = document.getElementById('destinationName');
        const distance = document.getElementById('distance');
        const travel = document.getElementById('travel');
        const image = document.getElementById('logo__image__destination');
        messageName.textContent = destinationName;
        //document.getElementById('destinationName').appendChild(destinationName);
        const destination = destinations.find(dest => dest.name === destinationName); // Trouver la destination correspondante
        
        if (destination) {
            messageContainer.textContent = destination.description; // Afficher la description
            distance.textContent = destination.distance;
            travel.textContent = destination.travel;
            image.src = destination.images.png;
            // console.log(destination.image[0]);
        } else {
            messageContainer.textContent = `Aucune description trouvée pour ${destinationName}.`; // Message par défaut
        }
    }
    /* function displayMessage(destination) {
        const messageContainer = document.querySelector(".container");
        messageContainer.textContent = `Bienvenue sur ${destination}`; // Afficher le message 
        console.log(`Bienvenue sur ${destination}`);
        // display here the elements from json file 
        const nameDestination = document.createElement('h2');
        
    } */ 
/*  document.getElementById('moon__link').innerHTML = destinations[0].name;
        document.getElementById('moon__link').style.textTransform = 'uppercase';
        
        document.getElementById('mars__link').innerHTML = destinations[1].name;
        document.getElementById('mars__link').style.textTransform = 'uppercase';
        
        document.getElementById('europa__link').innerHTML = destinations[2].name;
        document.getElementById('europa__link').style.textTransform = 'uppercase';

        document.getElementById('titan__link').innerHTML = destinations[3].name;
        document.getElementById('titan__link').style.textTransform = 'uppercase'; */ 
        // body document 



        /* destinations.forEach(destination => {
            console.log(destination.name);
            console.log(destination.description);
        }) */ 
       // console.log(destinations[0].name);
        // const namesContainer = document.getElementById('namesContainer'); // Assurez-vous d'avoir cet élément dans votre HTML
    
        // Vider le conteneur avant d'ajouter les nouveaux noms
        /* namesContainer.innerHTML = '';
    
        destinations.forEach(destination => {
            const nameElement = document.createElement('div'); // Créer un nouvel élément div pour chaque nom
            nameElement.textContent = destination.name; // Utiliser 'destination.name' pour obtenir le nom
            namesContainer.appendChild(nameElement); // Ajouter le nouvel élément au conteneur
        }); */ 
/* 
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.header').innerHTML = data;

        // Attendre que le DOM soit complètement chargé
        if (!headerInitialized) {
            headerInitialized = true;
            
            const navbar_nav = document.getElementById("navbarNav");
            const nav__items = navbar_nav.querySelectorAll(".nav-item");

            // Définir la page active basée sur l'URL actuelle
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            
            nav__items.forEach(item => {
                const link = item.querySelector('a');
                const href = link.getAttribute('href');
                
                if (href.includes(currentPage)) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }

                // Gestionnaire d'événements pour les clics
                item.addEventListener("click", function(e) {
                    e.preventDefault();
                    console.log("Click on link");

                    // Supprimer active de tous les éléments
                    nav__items.forEach(navItem => {
                        navItem.classList.remove('active');
                    });

                    // Ajouter active au lien cliqué
                    this.classList.add('active');
                    
                    // Navigation
                    const newHref = this.querySelector('a').getAttribute('href');
                    if (newHref && newHref !== '#') {
                        window.location.href = newHref;
                        
                    }
                });
            });
        }
    })
    .catch(error => console.error('Erreur lors du chargement du header:', error));
*/ 