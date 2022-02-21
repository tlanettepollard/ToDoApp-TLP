import React from 'react';
import moon from '../images/icon-moon.svg';
import sun from '../images/icon-sun.svg';



const Header = () => {
    return (
        <header className='header'>
            <div className='header-container'>
                <h1 className='header-title'>Todo</h1>
                <button aria-label='Switch Theme' className='btn-switch pointer'>
                    <img src={moon} alt='icon-moon' id='icon-moon' />
                    <img src={sun} alt='icon-sun' id='icon-sun' />
                </button>
            </div>
        </header>
    );
};
export default Header;