# Frontend Mentor - Rock, Paper, Scissors solution

![Design preview for the Rock, Paper, Scissors coding challenge](./design/desktop-preview.jpg)

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
- When the player and the computer choose the same item, 
     - 'Tie' will be displayed, 
     - 'Win' if the player wins, 
     - 'Lose' if computer wins
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Links

- Solution URL: [Github solution URL](https://github.com/Hibi4/FrontentMentor_project.git)
- Live Site URL: [live site URL](https://rock-paper-scissors-game-topaz-one.vercel.app/)

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

- I learned how to use React and how to create a project with it. I also learned how to use React Hook Form to handle the form and how to use React Testing Library to test the project. I also practiced my skills to use CSS Grid and Flexbox to create the layout of the project. I also learned how to use the useEffect hook applying setTimeout method to handle the logic of the project and the random method to pick an item.


```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.main {
  min-height: 100vh;
}
```
```js
useEffect(() => {
          setRoundOutcome('');
          setTimeout(() => {

               if (step === 'result' && playerChoice && computerChoice) {
                    const result = getResult(playerChoice, computerChoice);
                    setRoundOutcome(result);

                    console.log("result score: "+result);

                    if (result === 'YOU WIN') {
                         setPlayerScore((prev) => {
                              const newScore = prev + 1;
                              if (newScore === 3) {
                                   setIsBonusMode(true);
                              }
                              return newScore; 
                         });

                    } else if (result === 'LOSE') {
                         setComputerScore((prev) => prev + 1);
                    }
               }
          }, 1000)
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
                         <Modal.Title>Game's rule</Modal.Title>
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
