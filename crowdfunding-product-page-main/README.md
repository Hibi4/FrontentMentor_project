# Frontend Mentor - Crowdfunding product page solution

![Design preview for the Crowdfunding-product-page-main coding challenge](./design/desktop-preview.jpg)

This is a solution to the [Crowdfunding product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked

### Links

- Solution URL: [solution URL](https://github.com/Hibi4/FrontentMentor_project.git)
- Live Site URL: [live site URL](https://crowdfunding-product-sigma.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JavaScript
- Mobile-first workflow
- Tailwind CSS 
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I mostly learned how to use Tailwind CSS and how to use the @tailwindcss/browser package to add Tailwind CSS to my project by reading the official documentation.

```js

function openModal() {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

```

### Continued development

This is one of my few project using Tailwind CSS in a project, and I really enjoyed the experience. I’m looking forward to using it more frequently, especially in combination with React JS.

### Useful resources

- [Tailwind](https://tailwindcss.com/docs/) - I used Tailwind CSS for this project, and I found the documentation to be incredibly helpful. It provided clear guidance and made it easy to find exactly what I needed throughout the development process.

- [Vibe coding](cursor.com) - Additionally, I leveraged AI tools to assist me during development. They were especially useful for debugging my code and offering suggestions, which significantly improved my workflow and efficiency.

- [HTML](https://www.w3schools.com/tags/tag_hr.asp) - I used some examples from this site to add in my web page.

## Author

- Website - [Hibi](https://portfolio-ousmane.vercel.app/en/)
- Frontend Mentor - [@hibi4](https://www.frontendmentor.io/profile/hibi4)