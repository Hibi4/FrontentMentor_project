/* fetch('data.json')
    .then(response => response.json())
    .then(data => {
        displayElements(data.destinations);
    })
    .catch(error => console.log("Erreur lors du chargement de données: "+error));

    function displayElements(destinations) {
        document.getElementById('moon__link').innerHTML = destinations[0].name;
        document.getElementById('moon__link').style.textTransform = 'uppercase';
        
        document.getElementById('mars__link').innerHTML = destinations[1].name;
        document.getElementById('mars__link').style.textTransform = 'uppercase';
        
        document.getElementById('europa__link').innerHTML = destinations[2].name;
        document.getElementById('europa__link').style.textTransform = 'uppercase';

        document.getElementById('titan__link').innerHTML = destinations[3].name;
        document.getElementById('titan__link').style.textTransform = 'uppercase';

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
        }); 
    } */ 