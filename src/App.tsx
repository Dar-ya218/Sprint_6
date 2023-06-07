import './App.css';
import { useState } from 'react';
import {MakeWelcome} from './componentes/escena/Escena';
import {ButtonsNext} from './componentes/styled-components/button';
import {datos} from "./componentes/escena/datos";

function App() {
  
  const [num, setNum] = useState(1);
  const anterior = () => {
    if (num === 1) {
      setNum(datos.length);
    } else {
      setNum(num - 1);
    }
  };

  const siguiente = () => {
    if (num === datos.length) {
      setNum(1);
    } else {
      setNum(num + 1);
    }
  };
  

  return (
    <div>
      <ButtonsNext onClick={anterior}>Anterior</ButtonsNext>
      <ButtonsNext onClick={siguiente}>Siguiente</ButtonsNext>
      
      <MakeWelcome isFocused={num} />
    </div>
  )
}

export default App
