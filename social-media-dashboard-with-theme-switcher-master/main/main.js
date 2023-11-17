const swtichTheme = document.querySelector(".switch");
const switchInput = document.getElementById("input-switch");
const header__title = document.querySelector(".header__title");
const nb__likes = document.querySelector(".nb__likes");
const dashboard__1__overview = document.querySelector(".dashboard__1__overview");

/* document.addEventListener("click", (e) => {
    console.log("click on the switch icon");
    let elt = document.body;
    elt.classList.toggle("dark-mode");
    if (e.target.classList.contains("switch")) {
        document.body.classList.toggle("dark");
    } 
}); */

switchInput.addEventListener("click", (e) => {
    console.log("click on the switch input");
    let elt = document.body;
    elt.classList.toggle("dark-mode");
    // header__title.classList.toggle(".header__title__dark");
    header__title.style.color = "white";
    nb__likes.style.color = "white";
    dashboard__1__overview.style.backgroundColor = "hsl(230, 17%, 14%)";
});