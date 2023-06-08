import './App.css';
import { useState } from 'react';
import {MakeWelcome} from './componentes/escena/Escena';
import {ButtonsNext} from './componentes/styled-components/button';
import {datos} from "./assets/datos";

function App() {

  const [pantallaBienvenida, mostrarPantallaBienvenida] = useState(true);

  const ocultarPantalla = ()=>{
    mostrarPantallaBienvenida(false)
  }
  
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
  if(pantallaBienvenida){
    return(
     <>
       <h3>BIENVENIDO A UN TUTORIAL</h3>
       <button onClick={ocultarPantalla}>START</button>
     </>
    )
  }

if(!pantallaBienvenida){
  return (
    <>
      <ButtonsNext onClick={anterior}>Anterior</ButtonsNext>
      <ButtonsNext onClick={siguiente}>Siguiente</ButtonsNext>
      
      <MakeWelcome isFocused={num} />
    </>
  )
}
}

export default App
