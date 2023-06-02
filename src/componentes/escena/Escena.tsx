import datos from "./datos";
import { DivStyle } from "../styled-components/texto";
function MakeWelcome() {
    return datos.map((element)=>(
        <DivStyle >
            <h3>{element}</h3>
        </DivStyle>
    ));
}
export default MakeWelcome;
