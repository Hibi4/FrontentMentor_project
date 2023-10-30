let currentTab = 0;
let array_articles = [];
let array_addons = [];
showTab(currentTab);

function showTab(n) {
    let tabs = document.querySelectorAll(".tab");

    for (const elt of tabs) {
        elt.style.display = "none";
    }
    
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

    fixStepIndicator(n);
}

function nextPrev(n) {
    let tabs = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    tabs[currentTab].style.display = "none";
    currentTab = currentTab + n;
    console.log("enter in the button directions");
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    let x, y, i, valid = true;
    x = document.querySelectorAll(".tab");
    // x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      // If a field is empty... isNaN(y[i].value
      if(y[i].value == "" ) {
        valid = false;
        y[i].style.backgroundColor = "red";
      }
    }

    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        let i, x = document.getElementsByClassName("step_div");
    
        for (const elt of x) {
            elt.className = elt.className.replace(" finish", "");
        }
        x[currentTab].className += " finish";
    }
    
    return valid;
  }

  function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    let x = document.getElementsByClassName("step_div");
    
    for (const elt of x) {
        elt.className = elt.className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
  }

  document.addEventListener("DOMContentLoaded", function () {

    function handleCheckboxChange(checkbox, packageDiv , name, price) {
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                packageDiv.style.backgroundColor = "hsl(229, 24%, 87%)"; 
                packageDiv.style.border = "solid 1px hsl(228, 45%, 44%)";
                array_addons.push(name);
                array_addons.push(price);
                console.log(array_addons);
            } else {
                packageDiv.style.backgroundColor = "rgb(246, 237, 237)";
                packageDiv.style.border = "none";
                array_addons.pop(name);
                array_addons.pop(price);
                console.log(array_addons);
            }
        });
    }

    const checkboxOnline = document.querySelector(".checkbox_online");
    const onlinePackageDiv = document.querySelector(".online_package");
    const onlineArticleName = document.getElementById("description_online_name").innerHTML;
    const onlineArticlePrice = document.getElementById("description_online_price").innerHTML;
    handleCheckboxChange(checkboxOnline, onlinePackageDiv, onlineArticleName, onlineArticlePrice);

    const checkboxStorage = document.querySelector(".storage_checkbox");
    const storagePackageDiv = document.querySelector(".storage_package");
    const storageArticleName = document.getElementById("description_storage_name").innerHTML;
    const storageArticlePrice = document.getElementById("description_storage_price").innerHTML;
    handleCheckboxChange(checkboxStorage, storagePackageDiv, storageArticleName, storageArticlePrice);

    const checkboxProfile = document.querySelector(".profile_checkbox");
    const profilePackageDiv = document.querySelector(".profile_package");
    const profileArticleName = document.getElementById("description_profile_name").innerHTML;
    const profileArticlePrice = document.getElementById("description_profile_price").innerHTML;
    handleCheckboxChange(checkboxProfile, profilePackageDiv, profileArticleName, profileArticlePrice);
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".arcade_billing").addEventListener("click", function () {
        let n = document.getElementById("arcade_article_name").innerHTML;
        let p = document.getElementById("arcade_article_price").innerHTML;
        array_articles.push(n);
        array_articles.push(p);
        console.log(array_articles);
    });

    document.querySelector(".advanced_billing").addEventListener("click", function () {
        let n = document.getElementById("advanced_article_name").innerHTML;
        let p = document.getElementById("advanced_article_price").innerHTML;   
        array_articles.push(n);
        array_articles.push(p);
        console.log(array_articles);
    });

    document.querySelector(".pro_billing").addEventListener("click", function () {
        let n = document.getElementById("pro_article_name").innerHTML;
        let p = document.getElementById("pro_article_price").innerHTML;
        array_articles.push(n);
        array_articles.push(p);
        console.log(array_articles);
    });
    
});
  
