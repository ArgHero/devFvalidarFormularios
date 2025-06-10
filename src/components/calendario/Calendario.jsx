import "./Calendario.css"
import { useState , useEffect} from "react";

function Calendario(props){
    //const [selected,setSelected] = useState("");
    const {formulario,setFormulario} = props;

    function handleChange(event){
        event.preventDefault();
        //event.target.value
        setFormulario((form)=>{
            return{
                ...form,
                fecha:event.target.value
            }
        })
    }

    //useEffect(()=>console.log(selected),[selected])

    return(<>
        <p className="m-0">Seleccione la fecha de la reservación</p>
        <div className="d-flex flex-row justify-content-around  flex-wrap gap-1 bg-dark text-white p-1">
            <label htmlFor="calendario">No se puede reservar el mismo día</label>
            <input
            type="date"
            id="calendario"
            value={formulario.fecha}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            required
            />
            
        </div>
        
    </>)
}

export default Calendario;