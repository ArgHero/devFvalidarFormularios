import Entrada from "../entrada/Entrada";
import Intereses from "../intereses/Intereses";

function Formulario(){
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("Formulario enviado");
        
    }

    return(
        <form onSubmit={handleSubmit} className="d-flex flex-column ">
            <Entrada id = "txtNombre" etiqueta="Ingresa tu nombre" placeHolder="Nombre Completo" tipo="text"/>
            <Entrada id = "txtCorreo" etiqueta="Ingresa tu correo" placeHolder="correo@dominio.com" tipo="email"/>
            <Entrada id = "txtTelefono" etiqueta="Ingresa tu contacto" placeHolder="XX-XXXXXXXX" tipo="tel"/>
            <Intereses />
            <input className="btn btn-secondary w-50 mt-1" type="submit" value="Submit" />         
        </form>
    )
}

export default Formulario;