import "./Entrada.css"

function Entrada(props){
    const {id,etiqueta,placeHolder,tipo} = props;



    return(<>
        <label htmlFor={id} className="mt-2"> {etiqueta} </label>
        <input type={tipo} name="" id={id}  placeholder={placeHolder}/>
    </>)
}

export default Entrada