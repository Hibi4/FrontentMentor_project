function isEmail() {
    const valeur = document.getElementById("exampleInputEmail1").value;
    console.log("Passed elements is: " + valeur);
    var regex = /\S+@\S+\.\S+/;
    return regex.test(valeur);
}

function isMail() {
    if(isEmail()) {
        console.log(isEmail());
        window.location.href = "success.html";
    } else {
        console.log("Not a mail");
        document.getElementById("error_email_text").innerHTML = "valid email required"; 
    }
            
}
