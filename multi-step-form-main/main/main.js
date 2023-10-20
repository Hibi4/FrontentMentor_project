let currentTab = 0;
showTab(currentTab);

function showTab(n) {
    let tabs = document.getElementsByClassName("tab");
    tabs[n].style.display = "block";
    if (n == 0) {
        document.getElementById("previous_btn").style.display = "none";
    } else {
        document.getElementsByClassName("next_btn").style.display = "inline";
    }
    // show indicator here 
}

function nextPrev(n) {
    let tabs = document.getElementsByClassName("info");
    tabs[currentTab].style.display = "none";
    currentTab = currentTab + n;
    showTab(currentTab);
    
}