# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Links

- Solution URL: [Add solution URL here](https://github.com/Hibi4/FrontentMentor_project.git)
- Live Site URL: [Add live site URL here](https://media-dashbord-project.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

During this project, I learn how to implement the toggle switch. I found the solution on w3schools and I spent many times to understand the code (HTML & CSS).

I learn how to determine on which side (left or right ) of the div the user has clicked on the toggle switch. When the slider is clicked, it calculates the position of the click relative to the center of the slider and logs a message to the console based on whether the click is on the left or right side. (See the code in the js section)


```html
<label class="switch">
  <input type="checkbox" checked>
  <span class="slider round"></span>
</label>
```

```css
.switch {
    position: relative;
    display: inline-block;
    width: 65px;
    height: 34px;
    margin-top: 15px;
    margin-left: 5px;
  }
  
  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(87, 161, 87);
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  input:checked + .slider {
    background-color: rgb(211, 200, 200);
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  
.slider.round {
  border-radius: 34px;
}
  
.slider.round:before {
  border-radius: 50%;
}
```

```js
  document.getElementById('input-switch').addEventListener('click',     function  (event) {
    const sliderWidth = this.offsetWidth;
    const clickX = event.clientX - this.getBoundingClientRect().left;
    const clickRelativeToCenter = clickX - sliderWidth / 2;

    if (clickRelativeToCenter < 0) {
        applyDarkMode();
    } else {
        applyLightMode();
    }
  });
```

### Continued development

For future projects, I would like to use some Front-end frameworks (react, angular etc...) to solve the challenges.

I tried to use talwind css after finishing to implement the CSS code, but I couldn't use it well for some reasons I ignore. So I would like to use it in the future.


### Useful resources

- [Example resource 1](https://developer.mozilla.org/en-US/docs/Learn/) - This site helped me to use some bootstrap components.
- [Example resource 2](www.w3schools.com/) - This site helped me to search some CSS information.

## Author

- Website - [Add your name here](https://media-dashbord-project.vercel.app/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/hibi4)
