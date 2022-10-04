import React from 'react';
import './clear.css';

const ButtonClear = (props) => (
    <div className='boton-clear'
    onClick={() => props.manejarClick()}>
        {props.children}
    </div>
);

export { ButtonClear };