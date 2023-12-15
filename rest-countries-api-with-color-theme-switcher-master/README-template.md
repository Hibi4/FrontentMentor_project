# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Links

- Solution URL: [Github URL](https://github.com/Hibi4/FrontentMentor_project.git)
- Live Site URL: [Live site URL](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```css

  .countries {
    display: grid;
    grid-template-columns: repeat(4, 250px); 
    margin-top: 60px;
    gap: 60px;
}

```
```js
function handleEvent(event) {
    if (event.key === "Enter" || event.type === "click") {
      displaycountry();
    }
}

fetch('data.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });

```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


### Continued development

For future projects, I would like to use some Front-end frameworks (react, angular, next js etc...) to solve the challenges. I think it will be a good opportunity to learn how to use them and not forgetting to use talwind css with one of this frameworks.

### Useful resources

- [Example resource 1](https://www.w3schools.com/icons/fontawesome_icons_directional.asp) - This link helped me to find the direction icon for the "come back button". No picture was needed. Only one sigle code's line (fa-direction).
- [Example resource 2](https://www.w3schools.com/icons/tryit.asp?filename=tryicons_fa-moon-o) - This link helped me to find the direction icon for the "come back button". No picture was needed. Only one sigle code's line (fa-direction). 


## Author

- Website - [Hibi](https://www.your-site.com)
- Frontend Mentor - [@hibi4](https://www.frontendmentor.io/profile/hibi4)
