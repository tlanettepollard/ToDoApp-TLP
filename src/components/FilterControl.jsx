import React from 'react';

export default function FilterControl(props) {
    

    return (
        <div className='filter-control'>
            <div className='control-btn desktop-filter-control btn-group'>
                <button
                    type='button'
                    className='btn toggle-btn'
                    aria-pressed={props.isPressed}
                    onClick={() => props.setFilter(props.name)}
                >
                    <span className='visually-hidden'>Show </span>
                    <span>{props.name}</span>
                    <span className='visually-hidden'>tasks</span>   
               </button>
            </div>
            <div className='control-btn clear-btn'>
                <button
                    type='button'
                    className='btn'
                    
                >
                    Clear Completed
                </button>
            </div>
        </div>
    );
}