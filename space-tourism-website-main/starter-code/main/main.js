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
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.header').innerHTML = data;
        
        setTimeout(() => {
            const navbar_nav = document.getElementById("navbarNav");
            const nav__items = navbar_nav.querySelectorAll(".nav-item");
            
            // Ajouter la classe active au premier élément par défaut si nécessaire
            if (!document.querySelector('.nav-item.active')) {
                nav__items[0].classList.add('active');
            }
            
            nav__items.forEach(item => {
                item.addEventListener("click", function(e) {
                    e.preventDefault();
                    console.log("Click on link");
                    
                    let current = document.querySelector(".nav-item.active");
                    if (current) {
                        current.classList.remove("active");
                    }
                    
                    this.classList.add("active");
                });
            });
        }, 100);
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