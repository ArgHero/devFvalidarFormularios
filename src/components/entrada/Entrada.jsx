import "./Entrada.css"
import { useState } from "react";

function Entrada(props){
    const {id,etiqueta,placeHolder,tipo,formulario,setFormulario} = props;
    const userPath = new RegExp("^[a-z]*\s[a-z]*$");
    const emailPath = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+")
    const celPath = new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$");
    const [error, setError] = useState("");


    function handleOnChange(event){
        const txt = event.target.value.trim();
        setFormulario((formulario)=>{
            return{
                ...formulario,
                [id]:txt
            }
        }) 

    }



    function validarDatos(event){
        const txt = event.target.value.trim();
        let isValid = true;
        switch(tipo){
            case "text":
                if(!userPath.test(txt.toLowerCase()))
                    isValid = false;
                break;

            case "tel":
                if(!celPath.test(txt))
                    isValid = false;
                break;

            case "email":
                if(!emailPath.test(txt))
                    isValid = false;
                break;
            default:
                isValid = false;
        }//switch tipo

        setError(isValid?"":`${etiqueta} es inválido.`)


    }//validarDatos()

    return(<>
        <label htmlFor={id} className="mt-2"> {etiqueta} </label>
        <input type={tipo} name="" id={id} value={formulario[id]} onChange={handleOnChange} placeholder={placeHolder} onBlur={validarDatos} required/>
        {error && <p className="p-0 m-0" style={{ color: "red" }}>{error}</p>}
    </>)
}

export default Entrada