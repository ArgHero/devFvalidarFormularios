import "./Formulario.css"
import Entrada from "../entrada/Entrada";
import Intereses from "../intereses/Intereses";
import Horario from "../horario/Horario";
import Calendario from "../calendario/Calendario";
import SubirImagen from "../subir/SubirImagen";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

function Formulario(){
    const formDefault = {
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
    }

    const[formulario,setFormulario] = useState(formDefault);

    useEffect(()=>console.log(formulario),[formulario]) //Muestra en tiempo real el estado del formulario

    const showReserva = () => {

        const interesesMarcados = Object.entries(formulario.intereses)
            .filter(([key, value]) => value) // Filtra solo los valores que son true
            .map(([key]) => `<li class="text-start ml-3 pl-2">${key}</li>`) // Convierte los intereses en elementos de lista
            .join("");

        const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
        title: "Confirmar reservación",
        //text: "Los datos proporcionados son correctos",
        html: `
        <table border="1" style="width:100%; text-align:center;">
            <tr><td>Nombre</td><td>${formulario.txtNombre}</td></tr>
            <tr><td>Correo</td><td>${formulario.txtCorreo}</td></tr>
            <tr><td>Teléfono</td><td>${formulario.txtTelefono}</td></tr>
            <tr><td>Horario</td><td>${formulario.horario}</td></tr>
            <tr><td>Fecha</td><td>${formulario.fecha}</td></tr>
            <tr><td colspan="2"><strong>Intereses</strong><div class="d-flex gap-3 p-1">${interesesMarcados}</div> </td></tr>
            
        </table>
        `,
        //icon: "warning",
        imageUrl: formulario.imagen,
        imageWidth: "75%",
        imageHeight: "",
        imageAlt: "Identificación oficial",
        showCancelButton: true,
        confirmButtonText: "Hacer la reservación",
        cancelButtonText: "Cancelar",
        reverseButtons: true
        }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
            title: "Reservación confirmada",
            text: "Recibirá un correo de confirmación",
            icon: "success"
            });
            setFormulario(formDefault)
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            // swalWithBootstrapButtons.fire({
            // title: "Cancelled",
            // text: "Your imaginary file is safe :)",
            // icon: "error"
            // });
        }
        });
    }



    const handleSubmit = (event) =>{
        event.preventDefault();
        showReserva();
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