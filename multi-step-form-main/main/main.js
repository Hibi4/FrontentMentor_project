let currentTab = 0;
let array_articles = [];
let array_addons = [];
let array_total = [];
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
    // console.log("plan_step_validate: "+plan_step_valid);
    if ((n == 1 && !validateForm())) return false;

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
    /* for (i = 0; i < y.length; i++) {
      // If a field is empty... isNaN(y[i].value
      if(y[i].value == "" ) {
        valid = false;
        y[i].style.backgroundColor = "red";
      }
    } */

    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        let x = document.getElementsByClassName("step_div");
    
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

    let total_price = 0;
    function handleCheckboxChange(checkbox, packageDiv, name, price) {
        checkbox.addEventListener("change", function () {

            if (checkbox.checked) {  
                packageDiv.style.backgroundColor = "hsl(229, 24%, 87%)";
                packageDiv.style.border = "solid 1px hsl(228, 45%, 44%)";
                let number = 0;
                const article = {name: name, price: price};
                array_addons.push(article);
                console.log(array_addons);
                document.querySelector(".online_div").innerHTML = "";
                console.log("Array_addons length: "+array_addons.length);
                for (const element of array_addons) {
                    const divName = document.createElement("div");
                    const pName = document.createElement("p");
                    const divPrice = document.createElement("div");
                    const pPrice = document.createElement("p");
                    pName.innerHTML = element.name;
                    pPrice.innerHTML = element.price;
                    divName.appendChild(pName);
                    divPrice.appendChild(pPrice);
                    number = parseInt(element.price.match(/\d+/)[0]);
                    array_total.push(number);
                    document.querySelector(".online_div").appendChild(divName);
                    document.querySelector(".online_div").appendChild(divPrice);
                }
                
                total_price = 0;
                array_total.forEach(element => {
                    console.log("Total_price: "+array_total);
                    total_price += element;
                });
                document.getElementById("total_price").innerHTML = `+$${total_price}/mo`;
                
            } else {
                packageDiv.style.backgroundColor = "rgb(246, 237, 237)";
                packageDiv.style.border = "none";
                const article = {name: name, price: price};
                array_addons = array_addons.filter( (arrayItem) => {
                    return (arrayItem.name !== article.name ||
                    arrayItem.price !== article.price);
                });
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
        array_total = [];
        array_total.push(parseInt(p.match(/\d+/)[0]));
        document.querySelector(".arcade_billing").style.backgroundColor = "hsl(229, 24%, 87%)";
        document.querySelector(".advanced_billing").style.backgroundColor = "white";
        document.querySelector(".advanced_billing").style.backgroundColor = "white";
        document.getElementById("selected_articles_names").innerHTML = n + " (Monthly)";
        document.getElementById("selected_articles_prices").innerHTML = p;
        console.log(array_articles);
    });

    document.querySelector(".advanced_billing").addEventListener("click", function () {
        let n = document.getElementById("advanced_article_name").innerHTML;
        let p = document.getElementById("advanced_article_price").innerHTML;
        document.querySelector(".advanced_billing").style.backgroundColor = "hsl(229, 24%, 87%)";
        document.querySelector(".pro_billing").style.backgroundColor = "white";
        document.querySelector(".arcade_billing").style.backgroundColor = "white";
        array_articles.push(n);
        array_articles.push(p);
        array_total = [];
        array_total.push(parseInt(p.match(/\d+/)[0]));
        document.getElementById("selected_articles_names").innerHTML = n + " (Monthly)";
        document.getElementById("selected_articles_prices").innerHTML = p;
        console.log(array_articles);
    });

    document.querySelector(".pro_billing").addEventListener("click", function () {
        let n = document.getElementById("pro_article_name").innerHTML;
        let p = document.getElementById("pro_article_price").innerHTML;
        document.querySelector(".pro_billing").style.backgroundColor = "hsl(229, 24%, 87%)";
        document.querySelector(".arcade_billing").style.backgroundColor = "white";
        document.querySelector(".advanced_billing").style.backgroundColor = "white";
        array_articles.push(n);
        array_articles.push(p);
        array_total = [];
        array_total.push(parseInt(p.match(/\d+/)[0]));
        document.getElementById("selected_articles_names").innerHTML = n + " (Monthly)";
        document.getElementById("selected_articles_prices").innerHTML = p;
        console.log(array_articles);
    });
    
});

function displayArticles(list_article_) {
    for (const elt of list_article_) {
        document.getElementById("selected_articles_names").innerHTML = elt + "Monthly";
        document.getElementById("selected_articles_prices").innerHTML = elt;
    }
}

