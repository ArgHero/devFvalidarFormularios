import "./Intereses.css"
import Check from "../check/Check"

function Intereses(props){
    const {formulario,setFormulario} = props;

    function handleCheck(interes){
        setFormulario(
            (form)=>({
                ...form,
                intereses:{
                    ...form.intereses,
                    [interes]:!form.intereses[interes]
                }
            })
        )//setSelectedChecks()   
    }//handleCheck()

    return(
        <>
        <p className="m-0">Intereses</p>
        <div className="d-flex flex-row justify-content-around  flex-wrap gap-1 bg-dark text-white p-1">
            {Object.keys(formulario.intereses).map(interes=>
                <Check 
                    interes={interes} 
                    key={interes}
                    grupo="intereses"
                    checked={formulario.intereses[interes]}
                    handleCheck={handleCheck}
                />
            )}
        </div>
        </>
        
    )
}

export default Intereses