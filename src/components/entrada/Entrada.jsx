import "./Entrada.css"

function Entrada(props){
    const {id,etiqueta,placeHolder,tipo,formulario,setFormulario} = props;

    function handleBlur(event){
        event.preventDefault();
        const txt = event.target.value;
        setFormulario((formulario)=>{
            return{
                ...formulario,
                [id]:txt
            }
        })
    }
    return(<>
        <label htmlFor={id} className="mt-2"> {etiqueta} </label>
        <input type={tipo} name="" id={id}  placeholder={placeHolder} onBlur={handleBlur} required/>
    </>)
}

export default Entrada