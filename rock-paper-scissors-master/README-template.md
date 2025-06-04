# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

- I learned how to use React and how to create a project with it. I also learned how to use React Hook Form to handle the form and how to use React Testing Library to test the project. I also learned how to use CSS Grid and Flexbox to create the layout of the project. I also learned how to use the useEffect hook to handle the logic of the project and the random method to pick an item.



```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
useEffect(() => {
          if (step === 'result' && playerChoice && computerChoice) {
               const result = getResult(playerChoice, computerChoice);
               setRoundOutcome(result);

               if (result === 'WIN') {
                    setPlayerScore((prev) => {
                         const newScore = prev + 1;
                         if(newScore === 3 ) {
                              setIsBonusMode(true);
                         }
                         return newScore; // why return here 
                    });

               } else if (result === 'LOSE') {
                    setComputerScore((prev) => prev + 1);
               }
          }
     }, [step, playerChoice, computerChoice]);

     /* function to pick randomly one item */

     const pickRandomString = () => {
          const choices = ['rock', 'paper', 'scissors'];
          const randomIndex = Math.floor(Math.random() * choices.length);
          return choices[randomIndex];
     }

     /* modal to show the rules */

     <Modal
                    show={showRules}
                    onHide={() => setShowRules(false)}
                    centered
               >
                    <Modal.Header className="modal_header">
                         <Modal.Title>Règles du jeu</Modal.Title>
                         <div>
                              <img
                                   src={closeIcon}
                                   alt="close Icon"
                                   onClick={() => setShowRules(false)}
                                   style={{ cursor: 'pointer' }}
                              />
                         </div>
                    </Modal.Header>
```

### Continued development

I'm still not completely comfortable with React and I want to continue focusing on it. I want to learn more about the use of hooks and how to use them in a project.

### Useful resources

https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started

- [Example resource 1](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started) - This helped me to read and understand the basics of React.

- Library for React : https://react.dev/
- React Hook Form : https://react-hook-form.com/
- React Testing Library : https://testing-library.com/docs/react-testing-library/intro/
- npx create-react-app moz-todo-react 

## Author

- Website - [hibi](https://portfolio-ousmane.vercel.app/en/)
- Frontend Mentor - [@hibi4](https://www.frontendmentor.io/profile/hibi4)
