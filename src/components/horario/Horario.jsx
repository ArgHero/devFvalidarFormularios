import "./Horario.css"
import Radio from "../radio/Radio"

function Horario(props){
    //const [selected, setSelected] = useState("matutino");
    const {formulario,setFormulario} = props;

    function handleChange(event){
        setFormulario((form)=>{
            return{
                ...form,
                horario:event.target.value
            }
        })
    }//handleChange()

    return(<>
        <p className="m-0">Horarios</p>
        <div className="d-flex flex-row justify-content-around  flex-wrap gap-1 bg-dark text-white p-1" required>
            <Radio opcion = "matutino" grupo="horario" etiqueta="7:00am - 11:00am" selected={formulario.horario} handleChange={handleChange}/>
            <Radio opcion = "vespertino" grupo="horario" etiqueta="12:00pm - 04:00pm" selected={formulario.horario} handleChange={handleChange}/>
            <Radio opcion = "nocturno" grupo="horario" etiqueta="10:00pm - 02:00am" selected={formulario.horario} handleChange={handleChange}/>
        </div>
    </>)
}

export default Horario