import { DivStyle } from "../styled-components/texto";
import { FC } from "react";
import { datos } from "../../assets/datos";

interface welcomeProp  {
    isFocused: number;
}

export const MakeWelcome: FC<welcomeProp> = ({ isFocused }) => {
    return (
        <div>
            {datos.map((frase) => (
                <DivStyle key={frase.id} className={frase.id === isFocused ? 'focused' : 'unfocused'}>
                    <h3>{frase.text}</h3>
                </DivStyle>
            ))}
        </div>
    );
}

