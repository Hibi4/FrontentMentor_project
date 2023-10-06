/* const adviceId = document.querySelector(".advice-tag");
const adviceQuote = document.querySelector(".advice-quote");
const btn = document.querySelector(".btn");

function generateAdvice() {
  fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
    .then((response) => response.json())
    .then((response) => {
      let data = response.slip;
      let dataId = data.id;
      let dataAdvice = data.advice;

      adviceId.innerHTML = `advice # ${dataId}`;
      adviceQuote.innerHTML = dataAdvice;
    });
    https://api.github.com/users
} */ 

const adviceId = document.getElementById("advice_number");
const adviceQuote = document.getElementById("advice_text");

function generateAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      let id = response.slip.id;
      let advice = response.slip.advice;

      adviceId.innerHTML = id;
      adviceQuote.innerHTML = `" ${advice} "`; 
    })
}

