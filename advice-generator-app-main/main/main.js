const adviceId = document.getElementById("advice_number");
const adviceQuote = document.getElementById("advice_text");

function generateAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((response) => {
      try {
        
        let id = response.slip.id;
        let advice = response.slip.advice;

        adviceId.innerHTML = id;
        adviceQuote.innerHTML = `"${advice}"`;
      } catch (error) {
        console.log(error);
      }

    })
}
