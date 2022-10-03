import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png'
import { Button } from './Button';

function App() {
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='Logo de FreeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Button>1</Button>
          <Button>+</Button>
          <Button>1</Button>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
