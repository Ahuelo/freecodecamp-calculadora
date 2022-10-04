import React from 'react';
import './clear.css';

const ButtonClear = (props) => (
    <div className='boton-clear'>
        {props.children}
    </div>
);

export { ButtonClear };