import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
    return (
        <div className="wrapper">
            <header className="header-container">
                <h1>Todo</h1>
                <form>
                    <FontAwesomeIcon
                        className='input-icon'
                        icon={faCircle}
                    />

                    <input 
                        className='input add-task'
                        type='text'
                        name='text'
                        autocomplete='off'
                        placeholder='Create a new todo...'
                    />
                </form>
            </header>
        </div>
    );
};

export default Header;