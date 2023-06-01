import datos from "./datos";
function MakeWelcome() {
    return datos.map((element)=>(
        <div style = { { display:"flex"}}>
            <h3>{element}</h3>
        </div>
    ));
}
export default MakeWelcome;
