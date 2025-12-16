# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Github solution URL](https://github.com/Hibi4/FrontentMentor_project.git)
- Live Site URL: [Add live site URL](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

- I learned and practiced how to use React Hook Form to handle the form and how to use React Testing Library to test the project.
- I also practiced my skills to use CSS Grid and Flexbox to create the layout of the project.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
:root { ... }

transition: border-color 0.3s ease, box-shadow 0.3s ease; 

input:focus {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-focus);
    outline: none;
}

flex: 1; 

writing-mode: vertical-rl; 
```
```js
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      github: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // pass the data to the parent component
    onGenerateTicket({
      ...formData,
      avatar: selectedFile
    });
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

I'm still not fully completely comfortable with React and I want to continue focusing on it, learn more about the use of hooks and how to use them in a project.

### Useful resources

- [Example resource 1](https://www.w3schools.com/howto/howto_css_image_text.asp) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.

- [Example resource 2](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-position) - This article helps me to read and understand some examples about background positions.

- Vibe coding : I use cursor IDE to resolve some complex task. 

## Author

- Website - [Hibi](https://portfolio-ousmane.vercel.app/en/)
- Frontend Mentor - [@hibi4](https://www.frontendmentor.io/profile/Hibi4)


