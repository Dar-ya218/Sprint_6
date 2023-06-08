import "./App.css";
import { useState } from "react";
import { MakeWelcome } from "./componentes/escena/Escena";
import { ButtonsNext } from "./componentes/styled-components/button";
import { datos } from "./assets/datos";
import { StyledBackground } from "./componentes/styled-backgroun";

function App() {
    const [pantallaBienvenida, mostrarPantallaBienvenida] = useState(true);

    const ocultarPantalla = () => {
        mostrarPantallaBienvenida(false);
    };

    const [num, setNum] = useState(1);
    const anterior = () => {
        num === 1 ? 
        setNum(datos.length) : 
        setNum(num - 1);
    };

    const siguiente = () => {
        num === datos.length ?
        setNum(1) :
        setNum(num + 1);
    };

    return (
        <>
            {pantallaBienvenida ? (
                <>
                    <h3>BIENVENIDO A UN TUTORIAL</h3>
                    <button onClick={ocultarPantalla}>START</button>
                </>
            ) : (
                <StyledBackground img={datos[num - 1].img}>
                    <ButtonsNext onClick={anterior}>Anterior</ButtonsNext>
                    <ButtonsNext onClick={siguiente}>Siguiente</ButtonsNext>

                    <MakeWelcome isFocused={num}
                     />
                </StyledBackground>
            )}
        </>
    );
}

export default App;
