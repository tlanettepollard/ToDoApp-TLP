# Welcome to My ToDo List Code Notes

## 02/12/2022

Today I am starting on the todo list. The hardest part is how to structure my files. I could go simple and have only five components or I could have each module for each task.

Resources:

- [Sass Guidelines](https://sass-guidelin.es/#architecture)
- [Implementing Dark Mode in your React App with SCSS](https://dev.to/cmcwebcode40/simple-react-dark-mode-with-scss-lae)
- [Creating Add/Remove Effects for list items](https://dev.to/cmcwebcode40/simple-react-dark-mode-with-scss-lae)

## 02/13/2022

Just found out today that Node Sass has been deprecated. I got an error "Cannot find module sass". Thank you Stack Overflow! I decided to erase my app and start again. 🤞🏾 Now that I've started, I've been following the tutorial on MDN. I used a ul list for my tasks. I have six, but I know I can refactor them to be less.

Resources:

- [Add Sass to your React App in 2021!](https://medium.com/nerd-for-tech/add-sass-to-your-react-app-in-2021-here-is-how-c7260c323a5a)

### 02/17/2022

Today I'm following the MDN Tutorial. I'm trying to learn from the tutorial as I work on this app. I learned that visually-hidden will hide the element from sighted users, but be available for screen readers.

Resources:
[Beginning our React todo list](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)

### 02/18/2022

Hi. Started early this morning. Finally figured out why I was having an undefined error for my Sass variables. I also changed the folder back to scss.

---

Code holder

.attribution { font-size: 11px; text-align: center; }
.attribution a { color: hsl(228, 45%, 44%); }

Todo

  <!-- Add dynamic number --> items left

All
Active
Completed

Clear Completed

Drag and drop to reorder list

  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>

Attributions:
[Kremenovic](https://github.com/kremenovic/react-todo-app)-- resource sites for working with dark theme

<ul
               className='todo-list'
               aria-labelledby='list-heading'
            >
                <li className='todo'>
                    <FontAwesomeIcon
                        className='input-icon'
                        icon={faCircle}
                    />
                    <input id='todo-0' type='checkbox' defaultChecked={true} />
                    <label className='todo-label' htmlFor='todo-0'>
                        Pick up groceries
                    </label>
                </li>
                <li className='todo'>
                    <FontAwesomeIcon
                        className='input-icon'
                        icon={faCircle}
                    />
                    <input id='todo-1' type='checkbox' />
                    <label className='todo-label' htmlFor='todo-1'>
                        Take Shinxley and Mozeley to the vet
                    </label>
                </li>
                <li className='todo'>
                    <FontAwesomeIcon
                        className='input-icon'
                        icon={faCircle}
                    />
                    <input id='todo-2' type='checkbox' />
                    <label className='todo-label' htmlFor='todo-2'>
                        Vacuum
                    </label>
                </li>
                <li className='todo'>
                    <FontAwesomeIcon
                        className='input-icon'
                        icon={faCircle}
                    />
                    <input id='todo-3' type='checkbox' />
                    <label className='todo-label' htmlFor='todo-3'>
                        Wash clothes
                    </label>
                </li>
                <li className='todo'>
                    <FontAwesomeIcon
                        className='input-icon'
                        icon={faCircle}
                    />
                    <input id='todo-4' type='checkbox' />
                    <label className='todo-label' htmlFor='todo-4'>
                        Make doctor's appointment
                    </label>
                </li>
                <li className='todo'>
                    <FontAwesomeIcon
                        className='input-icon'
                        icon={faCircle}
                    />
                    <input id='todo-5' type='checkbox' />
                    <label className='todo-label' htmlFor='todo-5'>
                        Make hair appointment with Jenice.
                    </label>
                </li>
            </ul>
