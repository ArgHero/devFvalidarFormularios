import Entrada from "../entrada/Entrada";
import Intereses from "../intereses/Intereses";
import Horario from "../horario/Horario";
import Calendario from "../calendario/Calendario";
import SubirImagen from "../subir/SubirImagen";
import { useState, useEffect } from "react";

function Formulario(){

    const[formulario,setFormulario] = useState({
        txtNombre: "",
        txtCorreo: "",
        txtTelefono: "",
        intereses: {
            comida: false,
            guarderia: false,
            acompanantes: false,
            fotografia: false,
            musica: false,
            vestimenta: false
        },
        horario:"matutino",
        fecha:"",
        imagen:null
    });

   //useEffect(()=>console.log(formulario),[formulario])

    const handleSubmit = (event) =>{
        event.preventDefault();
    }//handleSubmit

    return(
        <form onSubmit={handleSubmit} className="d-flex flex-column ">
            <Entrada id = "txtNombre" etiqueta="Ingresa tu nombre" placeHolder="Nombre Completo" tipo="text" formulario={formulario} setFormulario={setFormulario}/>
            <Entrada id = "txtCorreo" etiqueta="Ingresa tu correo" placeHolder="correo@dominio.com" tipo="email" formulario={formulario} setFormulario={setFormulario}/>
            <Entrada id = "txtTelefono" etiqueta="Ingresa tu contacto" placeHolder="XX-XXXXXXXX" tipo="tel" formulario={formulario} setFormulario={setFormulario}/>
            <Intereses formulario={formulario} setFormulario={setFormulario}/>
            <Horario formulario={formulario} setFormulario={setFormulario}/>
            <Calendario formulario={formulario} setFormulario={setFormulario}/>
            <SubirImagen formulario={formulario} setFormulario={setFormulario}/>
            <input className="btn btn-secondary w-50 mt-1" type="submit" value="Submit" />         
        </form>
    )
}

export default Formulario;