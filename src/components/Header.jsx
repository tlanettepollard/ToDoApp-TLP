import React, { useContext } from 'react';
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
}