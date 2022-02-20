import React from 'react';
import { ReactComponent as LightIcon } from '../images/icon-sun.svg';
import { ReactComponent as DarkIcon } from '../images/icon-moon.svg';


const Header = ({ theme, toggleTheme }) => {
    return (
        <header className='header'>
            <h1 className='header__title'>Todo</h1>
            <button aria-label='Switch Theme' className='btn-switch' onClick={() => toggleTheme()}>
                { theme === 'light' ? <DarkIcon/> : <LightIcon />}
            </button>
        </header>
    );
};
export default Header;