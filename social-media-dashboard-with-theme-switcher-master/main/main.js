const swtichTheme = document.querySelector(".switch");

document.addEventListener("click", (e) => {
    console.log("click on the switch icon");
    /* let elt = document.body;
    elt.classList.toggle("dark-mode");
    if (e.target.classList.contains("switch")) {
        document.body.classList.toggle("dark");
    } */
});

/* function myfunction() {
    let elt = document.body;
    elt.classList.toggle("dark-mode");
} */

const switchInput = document.getElementById("input-switch");
switchInput.addEventListener("click", (e) => {
    console.log("click on the switch input");
    let elt = document.body;
    elt.classList.toggle("dark-mode");
});