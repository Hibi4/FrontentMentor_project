# Frontend Mentor - Job listings with filtering solution

![Design preview for the Job listings with filtering coding challenge](./design/desktop-preview.jpg)

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- Filter job listings based on the categories

### Links

- Solution URL: [Add solution URL here](https://github.com/Hibi4/FrontentMentor_project.git)
- Live Site URL: [Add live site URL here](https://static-job-listings-omega.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Responsive design
- vanilla Javascript 

### What I learned

For this project, I used Flexbox, CSS Grid and Javascript. It's not new to me, but I practiced my knowledge on this project. I learn some new CSS properties in order to allow me to learn new things.

To see how you can add code snippets, see below:

```css
 I never use 'flex-grow' before. I learn many things by using it. 
  flex-grow: 1;
```
```js

- Using 'every' method was 'new' to me. I did not realize 'this' method exit before. It is a game changer.
- Using 'includes' is very helpful.
  return activeFilters.every(filter => jobTags.includes(filter));

- I even learn 'using a' spread operator 'in' JavaScript inside a array.

  const jobTags = [
    job.role,
    job.level,
    ...job.languages,
    ...job.tools
  ];
```

### Continued development

I would like to continue improving this side projects by adding new features.

### Useful resources

- [Example resource 1](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/every) - This helped me to read the documentation about JS methods and view practical examples.

- [Vibe Coding]Using cursor IDE, helps me to solve some complex bugs after not finding the solution by myself.

## Author

- Website - [Hibi](https://portfolio-ousmane.vercel.app/en/) 
- Frontend Mentor - [@hibi4](https://www.frontendmentor.io/profile/Hibi4)
