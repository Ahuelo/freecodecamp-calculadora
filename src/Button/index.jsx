import React from 'react';
import './button.css';

function Button (props){
    const esOperador = (valor) =>{
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }
    return(
        <div
        className={`button-contenedor ${esOperador(props.children) ? 'operador': ' '}`.trimEnd()} 
        onClick={() => props.manejarClick(props.children)}>
            {props.children}
        </div>
    )
};

export { Button };