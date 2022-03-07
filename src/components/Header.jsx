import React from 'react';
import moon from '../images/icon-moon.svg'
import sun from '../images/icon-sun.svg';

export default function Header() {
    
    return (
        <header className='title-container'>
            <h1>Todo</h1>
            <button className='btn'>
                <img src={moon} alt='icon-moon' />
                <img src={sun} alt='icon-sun' />
            </button>
        </header> 
    )
}


/* import React, { useContext } from 'react';
import ThemeContext from './contexts/ThemeContext';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Header className='title-container'>
            <h1>Todo</h1>
            <button className='btn theme-toggle-btn' onClick={toggleTheme}>
                {theme === 'light' && <MoonIcon />}
                {theme === 'dark' && <SunIcon />}
            </button>
        </Header> 
    )
}*/