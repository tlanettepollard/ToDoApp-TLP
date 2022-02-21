import React from 'react';



const Header = ({ theme, toggleTheme }) => {
    return (
        <header className='header'>
            <h1 className='header__title'>Todo</h1>
            <button aria-label='Switch Theme' className='btn-switch pointer'>
                <img src='../images/icon-moon.svg' alt='icon-moon' />
                <img src='../images/icon-sun.svg' alt='icon-sun' />
            </button>
        </header>
    );
};
export default Header;