console.log("js file");

// const navbar_nav = document.querySelector(".navbar-nav"); // myDIV
// const navbar_nav = document.getElementById("navbarNav");
// const nav__items = navbar_nav.querySelectorAll(".nav-link");

/* for (let i = 0; i < nav__items.length; i++) {
    nav__items[i].addEventListener("click", function() {
        // console.log("Click on link");
        let current = document.querySelector(".active");
        if (current) {
            current.classList.remove("active");
        }
        // var current = document.querySelector(".active");
        // current[0].className = current[0].className.replace(" active", "");
        // this.className+= " active";
        this.classList.add("active");
    });
} */
    // Variable globale pour suivre si le header a déjà été initialisé
let headerInitialized = false;

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
/*  const navbar_nav = document.getElementById("navbarNav");
  const nav__items = navbar_nav.querySelectorAll(".nav-item"); // Changement ici : .nav-link -> .nav-item
  
  nav__items.forEach(item => {
      item.addEventListener("click", function() {
          console.log("Click on link");
          let current = document.querySelector(".nav-item.active");
          if (current) {
              current.classList.remove("active");
          }
          this.classList.add("active");
      });
  }); */

/* var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
} */ 