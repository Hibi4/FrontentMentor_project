# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: [Add solution URL here](https://github.com/Hibi4/FrontentMentor_project.git)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned


For this project, I used Bootstrap and Javascript. It's not new for me but I practiced my knowledge during this project.

The only thing who were new for me was the use of the API. I used the fetch method to get the data from the API to get a random advice and display it to the screen.
  
  ```js
  function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        advice.innerHTML = data.slip.advice;
      });
  }
  ```

### Continued development

For future projects, I would like to use some Front-end frameworks (react, angular etc...) to solve the challenges.

### Useful resources

- Example resource 1 - ```https://getbootstrap.com/docs/4.6/getting-started/introduction/``` - This site helped me    to use some bootstrap components.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Hibi4)
