/* fetch('nav.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.nav').insertAdjacentHTML('beforeend', data);
    }); */
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.header').insertAdjacentHTML('beforeend', data);
    });