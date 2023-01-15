# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](./screenshot.jpg)

I have include six screen shots of three devices:

- Nokia N9 (480x854)
- iPad (768x1024)
- MacBook Air (1440x900)

I used the Responsively app while coding. They have a great screen-shot function. I also used Photoscape app to edit and combine the screen shots.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- Sass - still one of my favorites to use.

### What I learned

I'm still a novice when it comes to working with React. In fact, I started this project before I worked on my React Nanodegree with [Udacity](https://www.udacity.com/). Many of my notes focus on learning and reviewing key concepts I had learned through [Freecodecamp](https://www.freecodecamp.org/). While working on my Todo App, I learned:

- About making a unique ToDo task using name and adding props to the ToDoList Component. New-- used localeStorage for getting and holding task data. I was having a hard time figuring out how to import my sample tasks.
- That useState() creates a piece of state for a component, and its only parameter determines the initial value of that state. It returns two things: the state, and a function that can be used to update the state later.
- How to use an object spread syntax to create a new object and toggle checked property before returning it.
- About using an Array.prototype.filter() to test and exclude a task from the new array if the id prop matches the id parameter passed into the deleteTask();
- About how React deals with events and handles state, and implemented functionality to add tasks, delete tasks, and toggle tasks as completed.

The section that I was most proud about was my **ThemeContent.jsx** and **\_themes.scss**. This was my first time building a React app with light and dark theme.

To see how you can add code snippets, see below:

```React
import React from 'react';

export const initialThemeState = {
    theme: 'light',
    setTheme: () => null
};

const ThemeContext = React.createContext(initialThemeState);
export default ThemeContext;
```

```css
.proud-of-this-css {
	color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
	console.log('🎉');
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
