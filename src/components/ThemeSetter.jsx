import React, { useContext } from 'react';
import ThemeContext from './contexts/ThemeContext';
import { ReactComponent as DarkIcon } from '../images/icon-moon.svg'
import { ReactComponent as LightIcon } from '../images/icon-sun.svg'

export default function ThemeSetter() {
    const { theme, setTheme } = useContext(ThemeContext);
    
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <button aria-label='Switch Theme' toggleTheme={toggleTheme} className='btn' onClick={(e) => toggleTheme()}>
            {theme === 'light' ? <DarkIcon /> : <LightIcon />}    
        </button>
    );
}

