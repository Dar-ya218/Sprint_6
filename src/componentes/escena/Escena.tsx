import { DivStyle } from "../styled-components/texto";
import { FC } from "react";
import {datos} from "./datos";

interface welcomeProp  {
    isFocused: number;
    
}

 export const MakeWelcome:FC<welcomeProp>= ({isFocused})=> {
    return (
        <div>
            { 
            datos.map((frase)=>(
           <DivStyle className={frase.id === isFocused ? 'focused' : ''}>
               <h3>{frase.text}</h3>
           </DivStyle>
            ))
            }
        </div> 
    )
}

