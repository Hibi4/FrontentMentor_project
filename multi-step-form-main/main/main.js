let currentTab = 0;
showTab(currentTab);

function showTab(n) {
    var tabs = document.querySelectorAll(".tab");
    console.log(tabs.length);
    //let tabs = document.getElementsByClassName("tab");
    tabs[n].style.display = "block";
    // document.getElementsByClassName("tab.info").style.display = "block";
    if (n === 0) {
        document.querySelector(".previous_btn").style.display = "none";
    } else {
        document.querySelector(".next_btn").style.display = "inline";
    }
    // show indicator here 
}

function nextPrev(n) {
    let tabs = document.getElementsByClassName("tab");
    tabs[currentTab].style.display = "none";
    currentTab = currentTab + n;
    showTab(currentTab);
}
