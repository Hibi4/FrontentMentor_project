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
    const navbar_nav = document.getElementById("navbarNav");
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
    });

/* var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
} */ 