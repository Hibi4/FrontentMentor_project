let currentTab = 0;
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
}

function nextPrev(n) {
    let tabs = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    tabs[currentTab].style.display = "none";
    currentTab = currentTab + n;
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    let x, y, i, valid = true;
    x = document.querySelectorAll(".tab");
    // x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    /* for (i = 0; i < y.length; i++) {
      // If a field is empty... isNaN(y[i].value
      if(y[i].value == "" ) {
        valid = false;
        y[i].style.backgroundColor = "red";
      }
    }*/
    
    // If the valid status is true, mark the step as finished and valid:
    /* if (valid) {
      document.getElementsByClassName("step")[currentTab].className += " finish";
      y[i].style.backgroundColor = "white";
    } */
    
    return valid;
  }

  document.addEventListener("DOMContentLoaded", function () {
    
    function handleCheckboxChange(checkbox, packageDiv) {
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                packageDiv.style.backgroundColor = "hsl(229, 24%, 87%)"; 
                packageDiv.style.border = "solid 1px hsl(228, 45%, 44%)";
            } else {
                packageDiv.style.backgroundColor = "white";
                packageDiv.style.border = "none";
            }
        });
    }

    const checkboxOnline = document.querySelector(".checkbox_online");
    const onlinePackageDiv = document.querySelector(".online_package");
    handleCheckboxChange(checkboxOnline, onlinePackageDiv);

    const checkboxStorage = document.querySelector(".storage_checkbox");
    const storagePackageDiv = document.querySelector(".storage_package");
    handleCheckboxChange(checkboxStorage, storagePackageDiv);

    const checkboxProfile = document.querySelector(".profile_checkbox");
    const profilePackageDiv = document.querySelector(".profile_package");
    handleCheckboxChange(checkboxProfile, profilePackageDiv);
});

  