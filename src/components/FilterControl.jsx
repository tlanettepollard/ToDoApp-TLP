import React from 'react';

export default function FilterControl(props) {
    return (
        <div className='filter-control'>
            <div className='todos-count'>3 tasks remaining
            </div>
            <div className='control-btn desktop-filter-control btn-group'>
                All Active completed
            </div>
            <div className='control-btn'>
                <button className='btn'>
                    Clear Completed
                </button>
            </div>
        </div>
    );
}