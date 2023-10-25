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
    } */ 
    
    // If the valid status is true, mark the step as finished and valid:
    /* if (valid) {
      document.getElementsByClassName("step")[currentTab].className += " finish";
      y[i].style.backgroundColor = "white";
    } */
    
    return valid;
  }

  // Add this code to your JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Find the checkbox and the online_package div
    const checkboxOnline = document.querySelector(".checkbox_online");
    const onlinePackageDiv = document.querySelector(".online_package");
    const checkboxStorage = document.querySelector(".storage_checkbox"); // checkbox
    const storagePackageDiv = document.querySelector(".storage_package"); // div storage
    const profileCheckboxDiv = document.querySelector(".profile_package");
    const checkboxProfile = document.querySelector(".profile_checkbox");

    checkboxProfile.addEventListener("change", function () {
        if (checkboxProfile.checked) {
            // profileCheckboxDiv.style.backgroundColor = "your-desired-color"; // Change to your desired color
            console.log("chekcbox profile checked");
        } else {
            // profileCheckboxDiv.style.backgroundColor = "initial"; // Change to the initial background color
            console.log("chekcbox profile not checked");
        }
    });

    checkboxStorage.addEventListener("change", function () {
        if (checkboxStorage.checked) {
            // storagePackageDiv.style.backgroundColor = "your-desired-color"; // Change to your desired color
            console.log("chekcbox storage checked");
        } else {
            // storagePackageDiv.style.backgroundColor = "initial"; // Change to the initial background color
            console.log("chekcbox storage not checked");
        }
    });

    // Add an event listener to the checkbox
    checkboxOnline.addEventListener("change", function () {
        if (checkboxOnline.checked) {
            // onlinePackageDiv.style.backgroundColor = "your-desired-color"; // Change to your desired color
            console.log("chekcbox online checked");
        } else {
            // onlinePackageDiv.style.backgroundColor = "initial"; // Change to the initial background color
            console.log("chekcbox online not checked");
        }
    });
});

/* 
document.querySelector(".arcade_billing").addEventListener("click", function() {
    document.querySelector(".arcade_billing").style.backgroundColor = "rgb(228, 217, 217)";
});

document.querySelector(".advanced_billing").addEventListener("click", function() {
    document.querySelector(".advanced_billing").style.backgroundColor = "rgb(228, 217, 217)";
});

document.querySelector(".pro_billing").addEventListener("click", function() {
    document.querySelector(".pro_billing").style.backgroundColor = "rgb(228, 217, 217)";
}); */

/* document.querySelector(".checkbox_online").addEventListener("click", function() {
    // document.querySelector(".checkbox_storage").style.backgroundColor = "rgb(228, 217, 217)";
    // console.log("you click on the checkbox online");
    if(document.querySelector(".checkbox_online").value == true) {
       console.log("chekcbox online checked");
    } else {
        console.log("chekcbox online not checked");
    }
}); */


/* if(document.querySelector(".checkbox_online").value == true){
    // document.querySelector(".storage_chekcbox").style.backgroundColor = "rgb(228, 217, 217)";
    console.log("chekcbox storage checked");
} else {
    console.log("chekcbox storage not checked");
}*/ 