import "./SubirImagen.css"
import { useState } from "react";

function SubirImagen(props){
    const {formulario,setFormulario} = props;

    function handleChange(event){
        event.preventDefault();
        const carga = event.target.files[0];
        if(carga)
            setFormulario((formulario)=>new Object({
                    ...formulario,
                    "imagen": URL.createObjectURL(carga)
                }))
    }//handleChange

    //imagen && significa que solo se renderiza si imagen tiene contenido
    return(<>

        <p className="m-0">Suba una identificación válida</p>
        <div className="d-flex flex-row justify-content-around  flex-wrap gap-1 bg-dark text-white p-2 align-items-center">
            <input type="file" accept="image/*" onChange={handleChange} required/>
            {formulario.imagen && <img src={formulario.imagen} alt="Vista previa" style={{ maxWidth: "10%", borderRadius:"1rem"}} />}
        </div>
    
    </>)
}

export default SubirImagen;