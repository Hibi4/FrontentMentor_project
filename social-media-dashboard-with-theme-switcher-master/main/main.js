const swtichTheme = document.querySelector(".switch");
const switchInput = document.getElementById("input-switch");
const header__title = document.querySelector(".header__title");
const nb__likes = document.querySelectorAll(".nb__likes");
const dashbord = document.querySelectorAll(".dashboard__1");
const dashboard__1__overview = document.querySelectorAll(".dashboard__1__overview");
const overviewText = document.querySelectorAll(".overview__text");
const nbFollowers = document.querySelectorAll(".nb_followers");
const g = document.querySelectorAll(".social_media p");
const dashboard__1 = document.querySelectorAll(".dashboard__1");

/* document.getElementById('input-switch').addEventListener('click', function(event) {
    
    var sliderWidth = this.offsetWidth;
    var clickX = event.clientX - this.getBoundingClientRect().left;
    var clickRelativeToCenter = clickX - sliderWidth / 2;

    document.querySelector(".body").style.backgroundColor = "hsl(232, 19%, 15%)";
    // Determine if the click is on the left or right side of the slider
    if (clickRelativeToCenter < 0) {
        header__title.style.color = "white";
        document.querySelector(".header__toggle p").style.color = "white ";
        document.getElementById("overview__title").style.color = "white";
        document.querySelector(".header__body").style.backgroundColor = "hsl(232, 19%, 15%)";
        overviewSection();
    } else {
        document.querySelector(".body").style.backgroundColor = "white";
        header__title.style.color = "black";
        document.getElementById("overview__title").style.color = "black";
        document.querySelector(".header__toggle p").style.color = "gray";
        document.querySelector(".header__body").style.backgroundColor = "hsl(227, 47%, 96%)";
        for(const elt of dashboard__1__overview) {
            elt.style.backgroundColor = "hsl(227, 47%, 96%)";
        }

        for (const elt of nb__likes) {
            elt.style.color = "black";
        }
        
        for (const elt of overviewText) {
            elt.style.color = "black";
        }

        for(const elt of dashboard__1) {
            elt.style.backgroundColor = "hsl(227, 47%, 96%)";
        }

        for (const elt of nbFollowers) {
            elt.style.color = "black";
        }

        for (const elt of g) {
            elt.style.color = "black";
        }
    
    }
});


function overviewSection() {
    
    for(const elt of dashboard__1__overview) {
       elt.style.backgroundColor = "hsl(228, 28%, 20%)";
    }
    
    for (const elt of nb__likes) {
        elt.style.color = "white";
    }

    for (const elt of overviewText) {
        elt.style.color = "white";
    }

    for (const elt of dashbord) {
        elt.style.backgroundColor = "hsl(228, 28%, 20%)";
    }

    for (const elt of nbFollowers) {
        elt.style.color = "white";
    }

    for (const elt of g) {
        elt.style.color = "white";
    }

}*/ 

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
    
    // document.getElementsByTagName("input:checked + .slider:before").style.backgroundColor = "black";
    /*   input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  } */
    /* for(const elt of dashboard__1__overview) {
        elt.style.backgroundColor = "hsl(227, 47%, 96%)";
    }

    for(const elt of dashboard__1) {
        elt.style.backgroundColor = "hsl(227, 47%, 96%)";
    }

    for (const elt of nb__likes) {
        elt.style.color = "black";
    }

    for (const elt of overviewText) {
        elt.style.color = "black";
    }

    for (const elt of nbFollowers) {
        elt.style.color = "black";
    }

    for (const elt of g) {
        elt.style.color = "black";
    } */

    applychanges(false);

    /* function applyLightMode() {
        document.querySelector(".body").style.backgroundColor = "white";
        header__title.style.color = "black";
        document.getElementById("overview__title").style.color = "black";
        document.querySelector(".header__toggle p").style.color = "gray";
        document.querySelector(".header__body").style.backgroundColor = "hsl(227, 47%, 96%)";
        for (const elt of dashboard__1__overview) {
            elt.style.backgroundColor = "hsl(227, 47%, 96%)";
        }
        // Add other light mode styles
        overviewSection(false);
    } */
}

function applyCommonStylesToDashboardElements(elements, backgroundColor, textColor) {
    for (const elt of elements) {
        elt.style.backgroundColor = backgroundColor;
        elt.style.color = textColor;
    }
    
}

/* function applyCommonStylesToElements() {
    applyCommonStylesToDashboardElements(dashboard__1__overview, "hsl(227, 47%, 96%)", "black");
    applyCommonStylesToDashboardElements(dashboard__1, "hsl(227, 47%, 96%)", "black");
    // Add other common styles for dashboard elements
} */ 

function applychanges(isDarkMode) {
    const backgroundColor = isDarkMode ? "hsl(228, 28%, 20%)" : "hsl(227, 47%, 96%)";
    const textColor = isDarkMode ? "white" : "black";

    applyCommonStylesToDashboardElements(dashboard__1__overview, backgroundColor, textColor);
    applyCommonStylesToDashboardElements(nb__likes, backgroundColor, textColor);
    applyCommonStylesToDashboardElements(overviewText, backgroundColor, textColor);
    applyCommonStylesToDashboardElements(dashboard__1, backgroundColor, textColor);
    applyCommonStylesToDashboardElements(nbFollowers, backgroundColor, textColor);
    applyCommonStylesToDashboardElements(g, backgroundColor, textColor);

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

// Assuming your input element has an ID 'input-switch'
// let inputSwitch = document.getElementById('input-switch');
// inputSwitch.addEventListener('change', function() {
// Get the input element
// var input = document.querySelector("input");
// Get the slider element
// var slider = document.querySelector(".slider");
// Change the background-color of the slider element when the input is clicked
// input.addEventListener("click", function() {
  // Use a random color for demonstration
 //  var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  // Set the background-color of the slider element with style
 //  slider.style.backgroundColor = randomColor;
  // console.log("data change");
//});



// Add a change event listener to the input element
/* inputSwitch.addEventListener('change', function() {
    console.log("data change");
    let styleSheet = document.styleSheets[0]; // Adjust the index if needed
    let ruleIndex = getRuleIndex('.slider:before', styleSheet);
*/
    // Change the background color of the pseudo-element ':before'
 //   styleSheet.cssRules[ruleIndex].style.backgroundColor = this.checked ? 'black' : 'red';
    // Select the pseudo-element ':before' using the styleSheet API
    //   var styleSheet = document.styleSheets[0]; // Adjust the index if needed
    //  var ruleIndex = getRuleIndex('input:checked + .slider:before', styleSheet);

    // Apply the transform style to the pseudo-element ':before'
    /* if (ruleIndex !== -1) {
        styleSheet.rules[ruleIndex].style.transform = this.checked ? 'translateX(26px)' : 'initial';
    } */
// });

// Function to get the index of a rule in a stylesheet
function getRuleIndex(selector, styleSheet) {
  for (let i = 0; i < styleSheet.rules.length; i++) {
    if (styleSheet.rules[i].selectorText === selector) {
      return i;
    }
  }
  return -1; // Rule not found
}

/* 


function overviewSection(isDarkMode) {
    const backgroundColor = isDarkMode ? "hsl(228, 28%, 20%)" : "hsl(227, 47%, 96%)";
    const textColor = isDarkMode ? "white" : "black";

    applyCommonStylesToElements(dashboard__1__overview, backgroundColor, textColor);
    applyCommonStylesToElements(nb__likes, backgroundColor, textColor);
    applyCommonStylesToElements(overviewText, backgroundColor, textColor);
    applyCommonStylesToDashboardElements();

    // Add other styles for the overview section
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
}); */


/* 



function applyCommonStylesToElements(elements, backgroundColor, textColor) {
    for (const elt of elements) {
        elt.style.backgroundColor = backgroundColor;
        elt.style.color = textColor;
    }
}

function applyCommonStylesToDashboardElements() {
    applyCommonStylesToElements(dashboard__1__overview, "hsl(227, 47%, 96%)", "black");
    applyCommonStylesToElements(dashboard__1, "hsl(227, 47%, 96%)", "black");
    // Add other common styles for dashboard elements
}

function overviewSection(isDarkMode) {
    const backgroundColor = isDarkMode ? "hsl(228, 28%, 20%)" : "hsl(227, 47%, 96%)";
    const textColor = isDarkMode ? "white" : "black";

    applyCommonStylesToElements(dashboard__1__overview, backgroundColor, textColor);
    applyCommonStylesToElements(nb__likes, backgroundColor, textColor);
    applyCommonStylesToElements(overviewText, backgroundColor, textColor);
    applyCommonStylesToDashboardElements();

    // Add other styles for the overview section
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
}); */


/* document.addEventListener("DOMContentLoaded", function() {
    overviewSection();
}); */