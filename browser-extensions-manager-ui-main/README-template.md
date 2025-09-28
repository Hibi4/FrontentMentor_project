# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Github solution URL](https://github.com/Hibi4/FrontentMentor_project.git)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I learned how to use React and how to create a project with it. I also learned how to use React Hook Form to handle the form and how to use React Testing Library to test the project. I also practiced my skills to use CSS Grid and Flexbox to create the layout of the project.

To see how you can add code snippets, see below:

```css
.remove-btn:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(199, 35, 26, 0.35);
}

.remove-btn:active {
    transform: translateY(1px);
    background-color: #a61d15;
    border-color: #a61d15;
}

.remove-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
```
```js

const handleToggle = (name) => {
  setExtensions(prev => prev.map(item => (
    item.name === name ? { ...item, isActive: !item.isActive } : item
  )));
};


const deleteItem = (name) => {
  setExtensions(prev => prev.filter(item => item.name !== name));
}
```

### Continued development

I'm still not fully completely comfortable with React and I want to continue focusing on it. I want to learn more about the use of hooks and how to use them in a project.


### Useful resources

- [Example resource 1](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started) - This helped me to read and understand the basics of React.
- [Example resource 2](https://coreui.io/blog/how-to-loop-inside-react-jsx/) - This sites helps me to watch some examples about loops.

## Author

- Website - [Hibi](https://portfolio-ousmane.vercel.app/en/)
- Frontend Mentor - [@Hibi4](https://www.frontendmentor.io/profile/Hibi4)