import "./Radio.css"

function Radio(props){
    const {opcion,grupo,etiqueta,selected,handleChange} = props;

    return(
        <div>
            <input
            type="radio"
            name={grupo}
            value={opcion}
            id={"radio"+opcion}
            checked={selected === opcion}
            onChange={handleChange}
            />
            <label htmlFor={"radio"+opcion}>{etiqueta}</label>
        </div>
    )
}

export default Radio