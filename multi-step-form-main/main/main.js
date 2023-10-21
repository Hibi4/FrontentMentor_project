let currentTab = 0;
showTab(currentTab);

/* function showTab(n) {
    var tabs = document.querySelectorAll(".tab");
    console.log("currentvalue: ", n);
    //let tabs = document.getElementsByClassName("tab");
    tabs[n].style.display = "block";
    // document.getElementsByClassName("tab.info").style.display = "block";
    if (n === 0) {
        document.querySelector(".previous_btn").style.display = "none";
    } else {
        document.querySelector(".next_btn").style.display = "inline";
    }
    // show indicator here 
} */
function showTab(n) {
    let tabs = document.querySelectorAll(".tab");

    for (const elt of tabs) {
        elt.style.display = "none";
    }

    /* for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    } */ 
    
    tabs[n].style.display = "block";

    if (n === 0) {
        document.querySelector(".previous_btn").style.display = "none";
    } else {
        document.querySelector(".previous_btn").style.display = "inline";
    }
    
    if (n === tabs.length - 1) {
        document.querySelector(".next_btn").style.display = "none";
    } else {
        document.querySelector(".next_btn").style.display = "inline";
    }
}

function nextPrev(n) {
    let tabs = document.getElementsByClassName("tab");
    tabs[currentTab].style.display = "none";
    currentTab = currentTab + n;
    showTab(currentTab);
}

document.querySelector(".previous_btn").addEventListener("click", function() {
    nextPrev(-1);
});

document.querySelector(".next_btn").addEventListener("click", function() {
    nextPrev(1);
});
