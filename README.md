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

The section that I was most proud about was my theme. This was my first time building a React app with light and dark theme. I included a snippet of my Sass for my theme below:

```scss
@mixin themed() {
	@each $theme, $map in $themes {
		.theme--#{$theme} & {
			$theme-map: () !global;
			@each $key, $submap in $map {
				$value: map-get(map-get($themes, $theme), '#{$key}');
				$theme-map: map-merge(
					$theme-map,
					(
						$key: $value,
					)
				) !global;
			}
			@content;
			$theme-map: null !global;
		}
	}
}
```

### Continued development

My main goal is to continue working with React to strengthen my skills. I was having difficulty adding the Drag and Drop feature to my Todo list. I plan to continue working on that version to get the feature to work.

### Useful resources

- [Sass Guidelines](https://sass-guidelin.es/#architecture)
- [Implementing Dark Mode in your React App with SCSS](https://dev.to/cmcwebcode40/simple-react-dark-mode-with-scss-lae)
- [Creating Add/Remove Effects for list items](https://dev.to/cmcwebcode40/simple-react-dark-mode-with-scss-lae)
- [Beginning our React todo list](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
- [How to create a dark mode in sass](https://medium.com/@katiemctigue/how-to-create-a-dark-mode-in-sass-609f131a3995) by Katie McTigue
- [The Best Way to Add Dark Mode to Your React/Sass Project](https://javascript.plainenglish.io/the-best-way-to-add-dark-mode-to-your-react-sass-project-ce3ae3bd8616), by Jimmy Lam
- [Coding a CSS Theme Switcher: A Multitude of Ways](https://joshuatz.com/posts/2019/coding-a-css-theme-switcher-a-multitude-of-web-dev-options/#method-b)
- [Having Problems with Your React App Not Loading and Throwing Page Unresponsive Message? Here's the Fix](https://hashnode.com/post/having-problems-with-your-react-app-not-loading-and-throwing-the-page-unresponsive-message-heres-a-fix-ckmli1ims044ro4s14xgobdhc), by Adedotun Adedigba
- [MDN Web Docs- :checked](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked)
- [Style Checkboxes and Radio Buttons](https://www.cssportal.com/blog/style-checkboxes-radio-buttons/)
- [How to Style a Checkbox with CSS](https://www.w3docs.com/snippets/css/how-to-style-a-checkbox-with-css.html)
- [MDN: Advanced Form Styling](https://developer.mozilla.org/en-US/docs/Learn/Forms/Advanced_form_styling#Check_boxes_and_radio_buttons)

## Author

- Website - [Trista Lanette Pollard](https://trista-lanette-pollard-portfolio.vercel.app/)
- Frontend Mentor - [@tlanettepollard](https://www.frontendmentor.io/profile/tlanettepollard)
- Twitter - [@TpLanetteNBCT](https://twitter.com/TpLanetteNBCT)

## Acknowledgments

I referred to the following web designers' code for guidance on this project:

- [Mileine](https://github.com/mileine/frontendmentor-todo-app-react)-- used as reference for organizing theme and building theme changer.
- [Kremenovic](https://github.com/kremenovic/react-todo-app)-- resource sites for working with dark theme
- [Cyishere.dev](https://codesandbox.io/s/iwfy7?file=/src/components/TodoList.js)-- followed his organization for component file structure and app template.
