# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Links

- Solution URL: [Github link](https://github.com/Hibi4/FrontentMentor_project.git)
- Live Site URL: [live site URL](https://ecommerce-product-app-pearl.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow (Responsive design)
- [React](https://reactjs.org/) - JS library

### What I learned

In this project, I learned how to use the Bootstrap grid system, Flexbox, CSS Grid, and Javascript. I learn React, how to use CSS inside it, the react Bootsrtrap, to create lightbox and open it to the screen, the react-icons and also event listener. I also integrate response design to allow the page to be responsive.

To see how you can add code snippets, see below:

```js
const nextImage = () => {
        const currentIndex = images.indexOf(currentImage);
        setCurrentImage(images[(currentIndex + 1) % images.length]);
    };

    const previousImage = () => {
        const currentIndex = images.indexOf(currentImage);
        setCurrentImage(images[(currentIndex - 1 + images.length) % images.length]);
    };

```

In the original SVG code, there was xmlns:xlink which caused an error in the console because in React attributes must be written with the camelCase syntax. xmlns:xlink becomes xmlnsXlink, fill-rule becomes fillRule, xlink:href becomes linkHref.

### Continued development

For future projects, I would like to continue to improve my React skills by creating more projects using React and adding
tailwind CSS.

### Useful resources

- [Example resource 1](https://react-bootstrap.netlify.app/docs/getting-started/introduction) 

- [Example resource 2](https://react.dev/learn/start-a-new-react-project) 

- Using Cursor IDE helps me to solve some bugs. It is a very useful tool to debug the code.

## Author

- Website - [Hibi](https://portfolio-ousmane.vercel.app/en/)
- Frontend Mentor - [@hibi4](https://www.frontendmentor.io/profile/Hibi4)
