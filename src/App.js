import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png'
import { Button } from './Button';
import { Screen } from './Screen/index.jsx';
import { ButtonClear } from './Clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setImput]=useState('');

  const agregarInput = val => {
    setImput(input+ val);
  };
  const calcularResultado = () => {
    setImput(evaluate(input));
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='Logo de FreeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Screen
        input={input}/>
        <div className='fila'>
          <Button
          manejarClick={agregarInput} >7</Button>
          <Button
          manejarClick={agregarInput} >8</Button>
          <Button
          manejarClick={agregarInput} >9</Button>
          <Button
          manejarClick={agregarInput} >+</Button>
        </div>
        <div className='fila'>
          <Button
          manejarClick={agregarInput} >4</Button>
          <Button
          manejarClick={agregarInput} >5</Button>
          <Button
          manejarClick={agregarInput} >6</Button>
          <Button
          manejarClick={agregarInput} >-</Button>
        </div>
        <div className='fila'>
          <Button
          manejarClick={agregarInput} >1</Button>
          <Button
          manejarClick={agregarInput} >2</Button>
          <Button
          manejarClick={agregarInput} >3</Button>
          <Button
          manejarClick={agregarInput} >x</Button>
        </div>
        <div className='fila'>
          <Button
          manejarClick={calcularResultado} >=</Button>
          <Button
          manejarClick={agregarInput} >0</Button>
          <Button
          manejarClick={agregarInput} >.</Button>
          <Button
          manejarClick={agregarInput} >/</Button>
        </div>
        <div className='fila'>
          <ButtonClear
          manejarClick={() => setImput('')} >
            Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
