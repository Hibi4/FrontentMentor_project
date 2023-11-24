const swtichTheme = document.querySelector(".switch");
const switchInput = document.getElementById("input-switch");
const header__title = document.querySelector(".header__title");
const nb__likes = document.querySelectorAll(".nb__likes");
const dashbord = document.querySelectorAll(".dashboard__1");
const dashboard__1__overview = document.querySelectorAll(".dashboard__1__overview");
const overviewText = document.querySelectorAll(".overview__text");
const nbFollowers = document.querySelectorAll(".nb_followers");
const social__media = document.querySelectorAll(".social_media p");
const dashboard__1 = document.querySelectorAll(".dashboard__1");

function applyDarkMode() {
    document.querySelector(".body").style.backgroundColor = "hsl(232, 19%, 15%)";
    document.querySelector(".header__title").style.color = "white";
    document.getElementById("overview__title").style.color = "white";
    document.querySelector(".header__toggle p").style.color = "white ";
    document.querySelector(".header__body").style.backgroundColor = "hsl(232, 19%, 15%)";
    applychanges(true);
}

function applyLightMode() {
    document.querySelector(".body").style.backgroundColor = "white";
    document.querySelector(".header__title").style.color = "black";
    document.getElementById("overview__title").style.color = "black";
    document.querySelector(".header__toggle p").style.color = "gray";
    document.querySelector(".header__body").style.backgroundColor = "hsl(227, 47%, 96%)";
    
    applychanges(false);

}

function applyCommonStylesToDashboardElements(elements, backgroundColor, textColor) {
    for (const elt of elements) {
        elt.style.backgroundColor = backgroundColor;
        elt.style.color = textColor;
    }
    
}

function applychanges(isDarkMode) {
    const backgroundColor = isDarkMode ? "hsl(228, 28%, 20%)" : "hsl(227, 47%, 96%)";
    const textColor = isDarkMode ? "white" : "black";

    applyCommonStylesToDashboardElements(dashboard__1__overview, backgroundColor, textColor);
    applyCommonStylesToDashboardElements(nb__likes, backgroundColor, textColor);
    applyCommonStylesToDashboardElements(overviewText, backgroundColor, textColor);
    applyCommonStylesToDashboardElements(dashboard__1, backgroundColor, textColor);
    applyCommonStylesToDashboardElements(nbFollowers, backgroundColor, textColor);
    applyCommonStylesToDashboardElements(social__media, backgroundColor, textColor);

}

document.getElementById('input-switch').addEventListener('click', function(event) {
    const sliderWidth = this.offsetWidth;
    const clickX = event.clientX - this.getBoundingClientRect().left;
    const clickRelativeToCenter = clickX - sliderWidth / 2;

    if (clickRelativeToCenter < 0) {
        applyDarkMode();
    } else {
        applyLightMode();
    }
});

