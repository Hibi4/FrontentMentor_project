const swtichTheme = document.querySelector(".switch");
const switchInput = document.getElementById("input-switch");
const header__title = document.querySelector(".header__title");
const nb__likes = document.querySelectorAll(".nb__likes");
const dashbord = document.querySelectorAll(".dashboard__1");
const dashboard__1__overview = document.querySelectorAll(".dashboard__1__overview");
const overviewText = document.querySelectorAll(".overview__text");
const nbFollowers = document.querySelectorAll(".nb_followers");
const g = document.querySelectorAll(".social_media p");

// Get the position of the click relative to the center of the slider
    /* var sliderWidth = event.currentTarget.offsetWidth;
    var clickX = event.clientX - event.currentTarget.getBoundingClientRect().left;
    var clickRelativeToCenter = clickX - sliderWidth / 2;
  
    // Determine if the click is on the left or right side of the slider
    if (clickRelativeToCenter < 0) {
      console.log('Clicked on the left side of the switch');
    } else {
      console.log('Clicked on the right side of the switch');
    } */ 
    // Get the position of the click relative to the center of the slider

document.getElementById('input-switch').addEventListener('click', function(event) {
    
    var sliderWidth = this.offsetWidth;
    var clickX = event.clientX - this.getBoundingClientRect().left;
    var clickRelativeToCenter = clickX - sliderWidth / 2;

    /* let elt = document.body;
    elt.classList.toggle("dark-mode"); */
    document.querySelector(".body").style.backgroundColor = "hsl(232, 19%, 15%)";
    // Determine if the click is on the left or right side of the slider
    if (clickRelativeToCenter < 0) {
        console.log('Clicked on the left side of the switch');
        header__title.style.color = "white";
        document.querySelector(".header__toggle p").style.color = "white ";
        document.getElementById("overview__title").style.color = "white";
        overviewSection();
    } else {
        console.log('Clicked on the right side of the switch');
        document.querySelector(".body").style.backgroundColor = "white";
        header__title.style.color = "black";
        document.getElementById("overview__title").style.color = "black";
        document.querySelector(".header__toggle p").style.color = "black";

        
    }
});

/* switchInput.addEventListener("click", (e) => {
    console.log("click on the switch input");
    let elt = document.body;
    elt.classList.toggle("dark-mode");
    // header__title.classList.toggle(".header__title__dark");
    header__title.style.color = "white";
    overviewSection();
}); */


function overviewSection() {
    
    for(const elt of dashboard__1__overview) {
        elt.style.backgroundColor = "hsl(230, 17%, 14%)";
    }
    // nb__likes.style.color = "white";
    for (const elt of nb__likes) {
        elt.style.color = "white";
    }
    for (const elt of overviewText) {
        elt.style.color = "white";
    }

    for (const elt of dashbord) {
        elt.style.backgroundColor = "hsl(230, 17%, 14%)";
    }

    for (const elt of nbFollowers) {
        elt.style.color = "white";
    }

    for (const elt of g) {
        elt.style.color = "white";
    }

}