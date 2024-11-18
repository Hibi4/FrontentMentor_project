let headerInitialized = false;

fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.header').innerHTML = data;

        if (!headerInitialized) {
            headerInitialized = true;
            
            const navbar_nav = document.getElementById("navbarNav");
            const nav__items = navbar_nav.querySelectorAll(".nav-item");

            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            
            nav__items.forEach(item => {
                const link = item.querySelector('a');
                const href = link.getAttribute('href');
                
                if (href.includes(currentPage)) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }

                item.addEventListener("click", function(e) {
                    e.preventDefault();

                    nav__items.forEach(navItem => {
                        navItem.classList.remove('active');
                    });
                    
                    this.classList.add('active');
                    
                    const newHref = this.querySelector('a').getAttribute('href');
                    if (newHref && newHref !== '#') {
                        window.location.href = newHref;
                        
                    }
                });
            });
        }
    })
    .catch(error => console.error('Erreur lors du chargement du header:', error));